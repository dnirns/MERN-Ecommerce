import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

const ProductSingle = (props) => {

  const [quantity, setQuantity] = useState(0)

  //? SET PRODUCT OBJECT IN STATE
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProducts = async() => {
      const res = await axios.get(`/api/products/${props.match.params.id}`)
      setProduct(res.data)
    }
    fetchProducts()
  }, [props.match])


  return (
    <>
      <Link to='/'>Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>by:</p>
              <h2>{product.brand}</h2>
            </ListGroup.Item>
            <ListGroup.Item>

            </ListGroup.Item>

            <ListGroup.Item>{product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup varient='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup varient='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductSingle
