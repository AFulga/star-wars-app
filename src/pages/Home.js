import CategoryCard from '../components/CategoryCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import falcon from '../assests/millennium-falconx400.jpg';
import chewbacca from '../assests/Chewbaccax400.jpg';
import { useSelector } from 'react-redux';

const Home = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <>
      <Row className='mt-5'>
        {categories.map(({ title, imageSrc }) => (
          <Col key={title}>
            <CategoryCard category={title} imageSrc={imageSrc} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
