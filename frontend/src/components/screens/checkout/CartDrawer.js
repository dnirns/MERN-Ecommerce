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

import { addToCart, removeFromCart } from '../../../actions/cartActions'
import { closeCart } from '../../../actions/cartActions'
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
    width: '100vw',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  item: {
    paddingRight: '0px',
  },
  cartItem: {
    width: '150px',
    padding: '10px',
  },
  checkout: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
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

  const totalPrice = cartItems
    .reduce((accumilator, item) => accumilator + item.qty * item.price, 0)
    .toFixed(2)

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
              <ListItem key={item.product} className={classes.item}>
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
                  secondary={`Price: £${(item.price * item.qty).toFixed(2)}`}
                />
                <ListItemSecondaryAction>
                  <Box mr={-2}>
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => removeItem(item.product)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant='middle' />
            </>
          ))}{' '}
        </List>

        <Box className={classes.checkout}>
          <Typography variant='body1'>
            <strong>{`Total: £${totalPrice}`}</strong>
          </Typography>
        </Box>

        <Box className={classes.checkout}>
          <Button
            variant='outlined'
            className={classes.checkout}
            onClick={handleClose}
          >
            Continue shopping
          </Button>

          {totalItems === 0 ? (
            <Button variant='outlined' disabled className={classes.checkout}>
              Go to Shipping
            </Button>
          ) : (
            <Link to='/shipping' onClick={handleClose}>
              <Button
                variant='contained'
                color='primary'
                className={classes.checkout}
              >
                Go to Shipping
              </Button>
            </Link>
          )}
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default CartDrawer
