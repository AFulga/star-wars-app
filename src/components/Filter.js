import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const Filter = ({ filterBands, setFilterindex, filterIndex }) => {
  return (
    <DropdownButton
      as={ButtonGroup}
      id={`dropdown-variants-warning`}
      variant='warning'
      title='Filter by length'
    >
      {filterBands.map((el, index) => {
        console.log('isActive', filterIndex, index, +filterIndex === index);
        return (
          <Dropdown.Item
            key={el.min}
            eventKey={index}
            onSelect={(event) => setFilterindex(event)}
            active={+filterIndex === index}
          >
            {el.label ? el.label : `${el.min} - ${el.max}`}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default Filter;
