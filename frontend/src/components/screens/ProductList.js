import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ProductCard from './ProductCard'
import { listProducts } from '../../actions/productActions'
import Spinner from '../common/Spinner'
import Error from '../common/Error'

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
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const classes = useStyles()

  return (
    <div className={classes.root}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <Grid container justify='center' spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default ProductList
