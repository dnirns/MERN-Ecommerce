import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/screens/Home'
import NavBar from './components/nav/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Route path='/' component={Home} exact />
      </Container>
    </Router>
  )
}

export default App
