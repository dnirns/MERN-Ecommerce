import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import theme from './theme'
import Footer from './components/common/Footer'
import Home from './components/screens/Home'
import NavBar from './components/nav/NavBar'
import ProductList from './components/screens/products/ProductList'
import ProductSingle from './components/screens/products/ProductSingle'
import CartDrawer from './components/screens/checkout/CartDrawer'
import Shipping from './components/screens/checkout/Shipping'
import Payment from './components/screens/payment/Payment'
import Confirmation from './components/screens/checkout/Confirmation'
import NavDrawer from './components/nav/NavDrawer'
import Popup from './components/common/Popup'

import { useSelector } from 'react-redux'

const App = () => {
  const nav = useSelector((state) => state.nav.navOpen)
  const popup = useSelector((state) => state.popup.popupOpen)
  const cart = useSelector((state) => state.cartOpen.cartOpen)

  return (
    <Router>
      <NavDrawer open={nav} />
      <CartDrawer open={cart} />
      <NavBar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Popup open={popup} />
        <Box minHeight='90vh'>
          <Route path='/' component={Home} exact />
          <Route path='/products' component={ProductList} />
          <Route path='/product/:id' component={ProductSingle} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/payment' component={Payment} />
          <Route path='/confirmation' component={Confirmation} />
        </Box>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
