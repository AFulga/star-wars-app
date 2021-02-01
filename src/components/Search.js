// import { Button } from 'bootstrap';
import { useState } from 'react';
import { FormControl, InputGroup, Button, Col, Row } from 'react-bootstrap';

const Search = ({ setSearchName }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Row className='justify-content-center'>
      <Col>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Search by name'
            aria-label='Search by name'
            aria-describedby='basic-addon2'
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
          />
          <InputGroup.Append>
            <Button
              variant='outline-secondary'
              onClick={(e) => setSearchName(searchText)}
            >
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Search;
