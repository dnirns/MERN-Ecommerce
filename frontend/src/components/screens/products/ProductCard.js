import React from 'react'
import { Link } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const ProductCard = ({ product, info }) => {
  return (
    <Box textAlign='center'>
      <div>
        <Link to={`/product/${product._id}`}>
          <CardMedia component='img' image={product.image} />
        </Link>
        {info && (
          <CardContent>
            <Typography variant='body1'>
              {product.name.toUpperCase()}
            </Typography>
            <Typography variant='body2'>
              Category: {product.category}
            </Typography>
            <Typography variant='subtitle1'>£{product.price}</Typography>
          </CardContent>
        )}
      </div>
    </Box>
  )
}

export default ProductCard
