import CategoryCard from '../components/CategoryCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import falcon from '../assests/millennium-falconx400.jpg';
import chewbacca from '../assests/Chewbaccax400.jpg';

const Home = () => {
  const categories = [
    {
      title: 'Starships',
      imageSrc: falcon,
    },
    {
      title: 'Species',
      imageSrc: chewbacca,
    },
  ];
  return (
    <Container>
      <Card.Title as='h2' className='text-warning text-center mt-3'>
        Categories
      </Card.Title>
      <Row>
        {categories.map(({ title, imageSrc }) => (
          <Col key={title}>
            <CategoryCard title={title} imageSrc={imageSrc} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
