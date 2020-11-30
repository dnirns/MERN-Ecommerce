import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MenuItem,
  FormControl,
  Select,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import Breadcrumbs from '../common/Breadcrumbs'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  box: {
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    textAlign: 'center',
    border: '3px solid black',
  },
  cartItem: {
    padding: theme.spacing(1),
  },
}))

const Cart = ({ match, location, history }) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  //? event handlers
  const removeItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkOut = () => {
    history.push('/shipping')
  }

  const totalItems = cartItems.reduce(
    (accumilator, item) => accumilator + item.qty,
    0
  )

  const subTotal = cartItems.reduce(
    (accumilator, item) => accumilator + item.qty * item.price,
    0
  )
  const tax = subTotal * 0.2
  const totalWithTax = subTotal + tax

  const classes = useStyles()

  return (
    <container className={classes.root}>
      <Breadcrumbs cart />
      <Typography variant='h2'>Cart</Typography>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid item>
          <div className={classes.box}>
            <Typography variant='body1'>Cart:</Typography>

            <List>
              {cartItems.map((item) => (
                <>
                  <ListItem key={item.product}>
                    <ListItemText
                      className={classes.cartItem}
                      primary={item.name.toUpperCase()}
                    />
                    <div>
                      <FormControl className={classes.cartItem}>
                        <Select
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, parseInt(e.target.value))
                            )
                          }
                          value={item.qty}
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <br />
                    <ListItemText
                      className={classes.cartItem}
                      secondary={`Price: £${parseInt(item.price * item.qty)}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge='end'
                        aria-label='delete'
                        onClick={() => removeItem(item.product)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant='middle' />
                </>
              ))}
            </List>
          </div>
        </Grid>

        <Grid item className={classes.box}>
          <ListItem>
            <Typography variant='body1'>{`Sub Total: ${subTotal}`}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>{`VAT @ 20%: ${tax}`}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>
              <strong>{`Total: ${totalWithTax}`}</strong>
            </Typography>
          </ListItem>
          <ListItem>
            {totalItems === 0 ? (
              <Button variant='outlined' disabled>
                Add to cart
              </Button>
            ) : (
              <Button variant='contained' color='primary' onClick={checkOut}>
                Checkout...
              </Button>
            )}
          </ListItem>
        </Grid>
      </Grid>
    </container>
  )
}

export default Cart
