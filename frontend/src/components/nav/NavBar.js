import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavBarDropDown from './NavBarDropdown'
import NavSearch from './NavSearch'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='md'
      bg='light'
      variant='light'
      className='px-4'
    >
      <Navbar.Brand>SHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-na' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto align-items-end px-3'>
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/products'>Shop</Link>
          </Nav.Link>
        </Nav>

        {/* <Nav className='ml-auto align-items-end px-3'>

        </Nav> */}
        <Nav className='ml-auto align-items-end px-3'>
        <NavSearch />
          <Nav.Link className='pl-4'>
            <Link to='/cart'>Cart</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar
