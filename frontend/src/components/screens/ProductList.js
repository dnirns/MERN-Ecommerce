import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ProductCard from './ProductCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const ProductList = () => {
  //? Setting state
  const [products, setProducts] = useState([])

  //? useEffect to make axios request on load
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products')
      setProducts(res.data)
    }
    fetchProducts()
  }, [])

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
      
              <ProductCard product={product} />

          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductList
