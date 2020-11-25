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
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const ProductSingle = (props) => {
  const [quantity, setQuantity] = useState(0)
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(props.match.params.id))
  }, [dispatch, props.match])

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const classes = useStyles()

  return (
    <>
      <Link to='/'>Back</Link>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <Grid container justify='center'>
          <Grid item md={4}>
            <Card variant='outlinded' p={2}>
              <CardActionArea>
                <CardMedia component='img' image={product.image} />
                <CardContent>
                  <Typography gutterBottom variant='h4' component='h2'>
                    {product.name}
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
          </Grid>
          <Grid item md={3}>
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
          <Grid item md={3}>
            <Card container className={classes.root}>
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
                      <InputLabel id='demo-controlled-open-select-label'>
                        Select Quantity
                      </InputLabel>
                      <Select
                        labelId='demo-controlled-open-select-label'
                        id='demo-controlled-open-select'
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        <MenuItem value=''></MenuItem>
                        {[...Array(product.stock).keys()].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
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
                      <Button variant='outlined' color='primary'>
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
