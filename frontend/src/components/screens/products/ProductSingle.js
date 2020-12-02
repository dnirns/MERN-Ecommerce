import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../../../actions/productActions'
import { addToCart } from '../../../actions/cartActions'
import { openPopup, closePopup } from '../../../actions/popupActions'
import {
  CardActionArea,
  CardMedia,
  MenuItem,
  FormControl,
  Select,
  Button,
  Divider,
  Grid,
  ListItem,
  Box,
  CardContent,
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Spinner from '../../common/Spinner'
import Error from '../../common/Error'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    display: 'flex',
    marginTop: 10,
    borderRadius: 2,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 40,
  },
  content: {
    padding: 20,
    margin: '0 auto',
  },
  price: {
    color: 'grey',
  },
}))

const ProductSingle = ({ match, history, location }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    dispatch(addToCart(match.params.id, qty))
    dispatch(openPopup)
    setTimeout(() => {
      dispatch(closePopup)
    }, 5000)
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <Grid container justify='center'>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box>
              <CardActionArea>
                <CardMedia component='img' image={product.image} />
              </CardActionArea>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box className={classes.content}>
              <CardContent>
                <Box m={2}>
                  <Typography variant='h5'>
                    {product.name}{' '}
                    <span className={classes.price}>£{product.price}</span>
                  </Typography>
                </Box>

                <Divider />
                <Box m={2}>
                  <Typography variant='subtitle1'>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Typography>
                </Box>
                <Divider />
                <>
                  <FormControl className={classes.formControl}>
                    <Select value={qty}>
                      <MenuItem value={0}>0</MenuItem>
                      {[...Array(product.stock).keys()].map((x) => (
                        <MenuItem
                          key={x + 1}
                          value={x + 1}
                          onClick={() => setQty(x + 1)}
                        >
                          {x + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </>
                {product.countInStock > 0 && (
                  <ListItem>
                    <Typography>Quantity:</Typography>
                    {[...Array(product.stock).keys()].map((x) => (
                      <Typography key={x + 1} value={x + 1}>
                        {x + 1}
                      </Typography>
                    ))}
                  </ListItem>
                )}
                <>
                  {product.stock === 0 ? (
                    <Link>
                      <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                      >
                        ADD TO CART
                      </Button>
                    </Link>
                  ) : (
                    <Link onClick={addToCartHandler}>
                      <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                      >
                        ADD TO CART
                      </Button>
                    </Link>
                  )}
                </>
              </CardContent>
            </Box>
          </Grid>
          <Grid>
            <Box>
              <ListItem className={classes.box}>
                <Container maxWidth='md'>
                  <Box my={3} py={2} mx={2}>
                    <Box pb={3}>
                      <Typography variant='h5'>Product Details:</Typography>
                      <Divider/>
                    </Box>

                    <Typography variant='body2'>
                      {product.description}
                    </Typography>
                  </Box>
                </Container>
              </ListItem>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default ProductSingle
