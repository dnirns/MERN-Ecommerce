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



const App = () => {
  return (
    <Router>
      <NavBar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Route path='/' component={Home} exact />
          <Route path='/products' component={ProductList} />
          <Route path='/product/:id' component={ProductSingle} />
          <Route path='/cart/:id?' component={Cart} />
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
