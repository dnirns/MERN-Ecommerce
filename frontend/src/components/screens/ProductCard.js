import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const ProductCard = ({ product }) => {
  return (
    <Card className='my-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' className='p-2 rounded' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.brand}</strong>
            <p>{product.name}</p>
          </Card.Title>
        </Link>
        <Card.Text as='div'></Card.Text>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
