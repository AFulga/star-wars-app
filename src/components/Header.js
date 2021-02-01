import { Navbar } from 'react-bootstrap';
import starWarsLogo from '../assests/star-wars-logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand='lg'>
      {/* <Navbar.Brand href='/'>
        <img src={starWarsLogo} />
      </Navbar.Brand> */}
      <NavLink to='/'>
        <img src={starWarsLogo} className='page-logo' />
      </NavLink>
    </Navbar>
  );
};

export default Header;
