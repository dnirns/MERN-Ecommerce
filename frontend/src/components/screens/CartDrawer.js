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
  Typography,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import DeleteIcon from '@material-ui/icons/Delete'

import { Link } from 'react-router-dom'

import { addToCart, removeFromCart } from '../../actions/cartActions'
import { closeCart } from '../../actions/cartActions'
const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    paddingRight: '20px',
  },
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
    width: '40vw',
    minWidth: '320px',
  },
  cartItem: {
    width: '150px',
    padding: '10px',
  },
  checkout: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
    borderRadius: '0px',
  },
})

const CartDrawer = ({ open }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const removeItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const totalItems = cartItems.reduce(
    (accumilator, item) => accumilator + item.qty,
    0
  )

  const subTotal = cartItems.reduce(
    (accumilator, item) => accumilator + item.qty * item.price,
    0
  )

  const handleClose = () => {
    dispatch(closeCart)
  }

  return (
    <>
      <SwipeableDrawer
        anchor='left'
        open={open}
        variant='temporary'
        onClose={handleClose}
      >
        <Box display='flex' flexDirection='row'>
          <Button>
            <CloseIcon onClick={handleClose} />
          </Button>

          <Divider orientation='vertical' flexItem />
          <Box className={classes.cartBox}>
            <Link to='/cart'>
              <Button>
                <Badge badgeContent={totalItems} color='primary'>
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
                  primary={item.name}
                />
                <div>
                  <FormControl className={classes.root}>
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
          ))}{' '}
        </List>

        <Box className={classes.checkout}>
          <Typography variant='body1'>
            <strong>{`Total: ${subTotal}`}</strong>
          </Typography>
        </Box>

        <Box className={classes.checkout}>
          {totalItems === 0 ? (
            <Button variant='outlined' disabled className={classes.checkout}>
              Add to cart
            </Button>
          ) : (
            <Link to='/shipping' onClick={handleClose}>
              <Button
                variant='contained'
                color='primary'
                className={classes.checkout}
              >
                Continue to checkout
              </Button>
            </Link>
          )}
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default CartDrawer
