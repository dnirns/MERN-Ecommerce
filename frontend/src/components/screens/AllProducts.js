import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import products from '../../data.js'

const AllProducts = () => {

  const productList = products

  return (
    <div>
        {
          productList.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Card className='my-3 py-3 rounded'>
              <Card.Img src={product.image} variant='top' />
              </Card>
          </Col>
          ))
        }
      Single Prod
    </div>
  )
}

export default AllProducts
