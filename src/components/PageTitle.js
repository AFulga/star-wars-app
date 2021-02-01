import Card from 'react-bootstrap/Card';
const PageTitle = ({ text }) => (
  <Card.Title as='h2' className='page-title text-center mt-3'>
    {text}
  </Card.Title>
);

export default PageTitle;
