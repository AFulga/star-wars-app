import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BreadcrumbItem from '../components/BreadcrumbItem';
import ItemDetails from '../components/ItemDetails';
import { createSlug } from '../utils';

const DetailsPage = () => {
  const params = useParams();
  const { cat: category, slug } = params;
  const items = [
    ...useSelector((state) =>
      state.categories.find((cat) => cat.title === category)
    ).items,
  ];
  const item = items.find((it) => createSlug(it.name) === slug);
  return (
    <>
      <BreadcrumbItem breadcrumbs={[params.cat, item.name]} />
      <ItemDetails item={item} />
    </>
  );
};

export default DetailsPage;
