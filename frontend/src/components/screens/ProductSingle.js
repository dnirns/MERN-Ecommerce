import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../../actions/productActions'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  MenuItem,
  FormControl,
  Select,
  Button,
  InputLabel,
  Grid,
  List,
  ListItem,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Spinner from '../common/Spinner'
import Error from '../common/Error'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
    minWidth: '180px',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}))

const ProductSingle = ({ match, history }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const classes = useStyles()

  return (
    <>
      <Link to='/products'>
        <Button variant='contained' color='primary'>Back</Button>
      </Link>

      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <Grid container justify='center'>
          <Grid item xs={10} md={4}>
            <Card variant='outlinded' p={2}>
              <CardActionArea>
                <CardMedia component='img' image={product.image} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={10} md={3}>
            <List>
              <ListItem>
                <Typography variant='h4' component='h2'>
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant='body' component='p'>
                  {product.brand}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>£{product.price}</Typography>
              </ListItem>
              <ListItem>
                <Typography variant='body' component='p'>
                  {product.description}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={10} md={2}>
            <Card className={classes.root}>
              <CardContent>
                <List>
                  <ListItem>
                    <Typography variant='body'>{product.price}</Typography>
                  </ListItem>

                  <ListItem>
                    <Typography></Typography>
                    <Typography variant='body'>
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Typography>
                  </ListItem>

                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Select Quantity</InputLabel>
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
                  </div>
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
                  <ListItem>
                    {product.stock === 0 ? (
                      <Button variant='outlined' disabled>
                        Add to cart
                      </Button>
                    ) : (
                      <Button variant='contained' color='primary' onClick={addToCartHandler}>
                        Add to cart
                      </Button>
                    )}
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ProductSingle
