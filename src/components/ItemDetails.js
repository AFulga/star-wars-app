import { Card, Col, Row } from 'react-bootstrap';
import placeholder from '../assests/big-placeholder.jpg';

const formatData = (item) => {
  if (item.model) {
    return {
      name: item.name,
      specifications: [
        { label: 'Model', data: item.model },
        { label: 'Manufacturer', data: item.manufacturer },
        { label: 'Cost', data: `${item.cost_in_credits} credits` },
        { label: 'Class', data: item.starship_class },
        { label: 'Speed', data: `${item.max_atmosphering_speed} km/h` },
        { label: 'Hyperdrive Rating', data: item.hyperdrive_rating },
        { label: 'MGLT', data: item.MGLT },
        { label: 'Length', data: `${item.length} m` },
        { label: 'Cargo Capacity', data: `${item.cargo_capacity} tons` },
        { label: 'Crew', data: item.crew },
        { label: 'Passengers', data: item.passengers },
      ],
    };
  }

  if (item.classification) {
    return {
      name: item.name,
      specifications: [
        { label: 'Classification', data: item.classification },
        { label: 'Designation', data: item.designation },
        { label: 'Language', data: item.language },
        { label: 'Avg Lifespan', data: `${item.average_lifespan} years` },
        { label: 'Avg Height', data: `${item.average_height} cm` },
        { label: 'Hair Color(s)', data: item.hair_colors },
        { label: 'Skin Color(s)', data: item.skin_colors },
        { label: 'Eye Color(s)', data: item.eye_colors },
      ],
    };
  }
};

const ItemDetails = ({ item }) => {
  const { name, specifications } = formatData(item);
  const urlSplit = item.url.split('/');
  const imagePath = `${urlSplit[urlSplit.length - 3]}/${
    urlSplit[urlSplit.length - 2]
  }`;

  return (
    <Row className='details-container mb-3 mt-2'>
      <Col
        lg={5}
        md={5}
        className='text-white bg-primary item-image'
        style={{
          backgroundImage: `url(https://starwars-visualguide.com/assets/img/${imagePath}.jpg), url(${placeholder})`,
        }}
      ></Col>
      <Col lg={7} md={7} className='bg-white item-text p-3 pl-5'>
        <Card.Title className='mt-1 mb-1'>{name}</Card.Title>
        {specifications.map(({ label, data }) => (
          <Card.Text className='mb-0' key={label}>
            {label}: {data}
          </Card.Text>
        ))}
      </Col>
    </Row>
  );
};

export default ItemDetails;
