import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/common/Home'

const App = () => {
  return (
    <Router>


        <Container>
          <Route path='/' component={Home} exact />
        </Container>


    </Router>
  )
}

export default App
