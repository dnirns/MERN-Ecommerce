import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  img: {
    padding: '10px',
  },
}))

const ProductCard = ({ product }) => {
  const classes = useStyles()

  return (
    <Link to={`/product/${product._id}`}>
      <Card variant='outlinded' p={2}>
        <CardActionArea>
          <CardMedia
            component='img'
            image={product.image}
            className={classes.img}
          />
          <CardContent>
            <Typography gutterBottom variant='h4' component='h2'>
              {product.name.toUpperCase()}
            </Typography>
            <Typography variant='body' component='p'>
              Category: {product.category}
            </Typography>
            <Typography gutterBottom variant='body' component='p'>
              £{product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default ProductCard
