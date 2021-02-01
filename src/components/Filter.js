import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const Filter = ({ filterBands, setFilterindex, filterIndex, unit }) => {
  return (
    <DropdownButton
      as={ButtonGroup}
      id={`dropdown-variants-warning`}
      variant='warning'
      title='Filter by length'
    >
      <Dropdown.Item eventKey={-1} onSelect={(event) => setFilterindex(null)}>
        Remove filter
      </Dropdown.Item>
      {filterBands.map((el, index) => {
        return (
          <Dropdown.Item
            key={el.min}
            eventKey={index}
            onSelect={(event) => setFilterindex(event)}
            active={filterIndex && +filterIndex === index}
          >
            {el.label
              ? `${el.label} ${unit}`
              : `${el.min} ${unit} - ${el.max} ${unit}`}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default Filter;
