import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../../actions/productActions'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Box, Container } from '@material-ui/core'
import ProductCard from './ProductCard'
import Spinner from '../../common/Spinner'
import Error from '../../common/Error'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: 20,
  },
})

const ProductList = () => {
  const [showInfo, setShowInfo] = useState(false)

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const classes = useStyles()

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
