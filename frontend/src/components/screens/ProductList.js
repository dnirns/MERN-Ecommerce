import { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductList = () => {
  //? Setting state
  const [products, setProducts] = useState([])

  //? useEffect to make axios request on load
  useEffect(() => {
    const fetchProducts = async() => {
      const res = await axios.get('/api/products')
      setProducts(res.data)
    }
    fetchProducts()
  },[])

  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductList
