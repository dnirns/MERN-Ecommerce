import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Container from '@material-ui/core/Container'
import Home from './components/screens/Home'
import NavBar from './components/nav/NavBar'
import ProductList from './components/screens/ProductList'
import ProductSingle from './components/screens/ProductSingle'
import Cart from './components/screens/Cart'
import CartDrawer from './components/screens/CartDrawer'
import Shipping from './components/screens/Shipping'
import Payment from './components/screens/Payment'
import NavDrawer from './components/nav/NavDrawer'
import Popup from './components/common/Popup'

import { useSelector } from 'react-redux'

const App = () => {
  const nav = useSelector((state) => state.nav.navOpen)
  const popup = useSelector((state) => state.popup.popupOpen)
  const cart = useSelector((state) => state.cartOpen.cartOpen)

  return (
    <Router>
      <NavBar />
      <NavDrawer open={nav} />
      <CartDrawer open={cart}/>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Popup open={popup} />
          <Route path='/' component={Home} exact />
          <Route path='/products' component={ProductList} />
          <Route path='/product/:id' component={ProductSingle} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/payment' component={Payment} />
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
