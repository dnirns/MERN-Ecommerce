

import NavSearch from './NavSearch'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='md'
      bg='nav-light'
      variant='nav-light'
      className='px-4 py-8'

      fixed='top'  >

      <Navbar.Brand>SHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-na'/>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto align-items-end px-3'>
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/products'>Products</Link>
          </Nav.Link>
        </Nav>
        <Nav className='ml-auto align-items-end px-3' >
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
