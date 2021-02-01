import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({ category, imageSrc }) => {
  return (
    <NavLink to={category}>
      <Card
        style={{ width: '18rem' }}
        className='ml-auto mr-auto mt-4 cat-card'
      >
        <Card.Img variant='top' src={imageSrc} />
        <Card.ImgOverlay className='pr-0 pl-0 align-items-end d-flex'>
          <Card.Title className='text-white text-center w-100 m-0 pb-1 cat-title'>
            {category}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </NavLink>
  );
};

export default CategoryCard;
