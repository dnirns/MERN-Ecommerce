import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ProductCard from './ProductCard'
import { listProducts } from '../../../actions/productActions'
import Spinner from '../../common/Spinner'
import Error from '../../common/Error'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',

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
  const [showInfo, setShowInfo] = useState(false)

  return (
    <Container className={classes.root}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <>
          <Box pb={3}>
            <Button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? 'Hide Info' : 'Show Info'}
            </Button>
          </Box>

          <Grid container justify='center' spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={product._id}>
                <ProductCard info={showInfo} product={product} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  )
}

export default ProductList
