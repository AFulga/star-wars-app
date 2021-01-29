import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const CategoryCard = ({ title, imageSrc }) => {
  return (
    <Card style={{ width: '18rem' }} className='ml-auto mr-auto mt-4'>
      <Card.Img variant='top' src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant='dark' className='btn-cat'>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
