import { Pagination } from 'react-bootstrap';

const PaginationComp = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination className='justify-content-center'>
      {pageNumbers.map((number) => {
        return (
          <Pagination.Item
            key={number}
            active={currentPage === number}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default PaginationComp;
