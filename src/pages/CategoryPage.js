import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BreadcrumbItem from '../components/BreadcrumbItem';
import CategoryItem from '../components/CategoryItem';
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import PaginationComp from '../components/Pagination';
import Search from '../components/Search';
import { buildUrl } from '../connectors/swapi';
import { STATUS } from '../utils';

const CategoryPage = () => {
  const params = useParams();
  const [state, setState] = useState({
    status: STATUS.IDLE,
    data: null,
    error: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchName, setSearchName] = useState(null);
  const [filterIndex, setFilterindex] = useState(null);

  const dispatch = useDispatch();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const { cat: category } = params;

  const cat = useSelector((state) =>
    state.categories.find((cat) => cat.title === category)
  );
  const filterBands = cat.filter.bands;
  const catItems = cat.items
    .filter((item) => {
      if (searchName === null) {
        return true;
      }
      return item.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
    })
    .filter((el) => {
      if (filterIndex === null) {
        return true;
      }
      const val = +el[cat.filter.keyName];
      const { min, max } = filterBands[filterIndex];
      return val >= min && val <= max;
    });
  console.log('cat.filter', cat.filter);
  console.log(
    'catItems',
    cat.filter.keyName,
    catItems.map((el) => el[cat.filter.keyName])
  );
  useEffect(() => {
    const fetchData = (path, page = 1) => {
      setState((prev) => {
        return { ...prev, status: STATUS.PENDING };
      });

      axios
        .get(buildUrl(`${path}?page=${page}`))
        .then((data) => {
          if (data.status >= 300) {
            throw new Error(`Fetch failed with status ${data.status}`);
          }

          dispatch({
            type: 'ADD-ITEMS',
            catTitle: path,
            payload: data.data.results,
          });
          if (data.data.next === null) {
            setState({ status: STATUS.RESOLVED });
          } else {
            fetchData(path, ++page);
          }
        })
        .catch((err) =>
          setState({ status: STATUS.REJECTED, error: err.message })
        );
    };
    if (catItems.length === 0) fetchData(category);
  }, [category]);

  if (state.status === STATUS.PENDING) {
    return <Loader />;
  }
  if (state.status === STATUS.REJECTED) {
    return (
      <div className='text-danger'>
        Error fetching watchlist: {JSON.stringify(state.error)}
      </div>
    );
  }

  return (
    <>
      <BreadcrumbItem breadcrumbs={[category]} />
      <Container>
        <Row>
          <Col sm={9} md={9} lg={9}>
            <Search setSearchName={setSearchName} />
          </Col>
          <Col sm={3} md={3} lg={3} className='text-center'>
            <Filter
              filterBands={filterBands}
              setFilterindex={setFilterindex}
              filterIndex={filterIndex}
            />
          </Col>
        </Row>
      </Container>
      <Row>
        {catItems
          .slice(indexOfFirstItem, indexOfLastItem)
          .map(({ name, url }) => {
            const urlSplit = url.split('/');
            const imagePath = `${category}/${urlSplit[urlSplit.length - 2]}`;
            return (
              <Col key={`${name}-${imagePath}`}>
                <CategoryItem
                  name={name}
                  imagePath={imagePath}
                  category={category}
                />
              </Col>
            );
          })}
      </Row>

      <PaginationComp
        itemsPerPage={itemsPerPage}
        totalItems={catItems.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CategoryPage;
