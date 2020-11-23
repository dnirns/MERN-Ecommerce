import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import products from '../../data.js'

const ProductList = () => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Card className='my-3 py-3 rounded'>
            <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
              <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as='div'>
              </Card.Text>
              <Card.Text>£{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProductList
