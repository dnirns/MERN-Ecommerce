import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/screens/Home'
import NavBar from './components/nav/NavBar'
import ProductList from './components/screens/ProductList'
import ProductSingle from './components/screens/ProductSingle'
import Cart from './components/common/Cart'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container className='pt-5 mt-5'>
        <Route path='/' component={Home} exact />
        <Route path='/products' component={ProductList} />
        <Route path='/product/:id' component={ProductSingle} />
        <Route path='/product/cart/:id?' component={Cart} />
        <Route path='/cart' component={Cart} />
      </Container>
    </Router>
  )
}

export default App
