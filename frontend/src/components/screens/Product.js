import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import products from '../../data'

const Product = (props) => {

  const product = products.find(product => product._id === props.match.params.id)
  console.log(product)

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

      </Row>
    </>
  )
}

export default Product
