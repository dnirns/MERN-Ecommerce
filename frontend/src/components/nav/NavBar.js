import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavBarDropDown from './NavBarDropdown'
import NavSearch from './NavSearch'
import { Link }from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
      <Navbar.Brand>Chopova Lowena</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/products'>Shop</Link></Nav.Link>
          <NavBarDropDown />
        </Nav>
        <NavSearch />
        <Nav.Link>Cart</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar
