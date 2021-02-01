import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import placeholder from '../assests/big-placeholder.jpg';
import { createSlug } from '../utils';
const CategoryItem = ({ name, imagePath, category }) => {
  return (
    <Card
      style={{ width: '14rem' }}
      className='ml-auto mr-auto mt-1 cat-item-bg mb-4'
    >
      <NavLink
        to={`${category}/${createSlug(name)}`}
        className='cat-item-no-decoration'
      >
        <Card.Body
          className='cat-item-image'
          style={{
            backgroundImage: `url(https://starwars-visualguide.com/assets/img/${imagePath}.jpg), url(${placeholder})`,
          }}
        ></Card.Body>
      </NavLink>
      <Card.Body className='cat-item-body'>
        <NavLink
          to={`${category}/${createSlug(name)}`}
          className='cat-item-no-decoration'
        >
          <Card.Text className='card-link font-weight-bold text-uppercase text-white cat-item-link'>
            {name}
          </Card.Text>
        </NavLink>
        {/* <Card.Link
            href='#'
            className='card-link font-weight-bold text-uppercase text-white cat-item-link'
          >
            {name}
          </Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default CategoryItem;
