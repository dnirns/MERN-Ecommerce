import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  MenuItem,
  FormControl,
  Select,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  SwipeableDrawer,
  Box,
  Badge,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import DeleteIcon from '@material-ui/icons/Delete'

import { Link } from 'react-router-dom'

import { addToCart, removeFromCart } from '../../actions/cartActions'

const useStyles = makeStyles({
  closeBox: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    width: '56px',
    padding: '16px',
  },
  cartBox: {
    marginLeft: 'auto',
    padding: '10px',
  },
  list: {
    width: '50vw',
  },
})

const CartDrawer = ({history}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

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

  return (
    <div>
      <SwipeableDrawer
        anchor='left'
        open={true}
        variant='temporary'
        // onClose={handleClose}
      >
        <Box display='flex' flexDirection='row'>
          <Button>
            <CloseIcon />
          </Button>
          <Divider orientation='vertical' flexItem />
          <Box>
            <Link to='/cart'>
              <Button>
                <Badge color='primary'>
                  <LocalMallIcon />
                </Badge>
              </Button>
            </Link>
          </Box>
        </Box>
        <Divider />
        <List className={classes.list}>
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
      </SwipeableDrawer>
    </div>
  )
}

export default CartDrawer
