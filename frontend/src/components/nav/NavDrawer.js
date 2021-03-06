import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { closeDrawer } from '../../actions/navActions'
import { openCart } from '../../actions/cartActions'
import { makeStyles } from '@material-ui/core/styles'

import {
  List,
  Divider,
  ListItem,
  Box,
  ListItemText,
  Button,
  Badge,
  SwipeableDrawer
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'
import LocalMallIcon from '@material-ui/icons/LocalMall'

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
    width: '100vw',
  },
})

const SideSheet = ({ open }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const totalItems = cart.cartItems.reduce(
    (accumilator, item) => accumilator + item.qty,
    0
  )

  const handleCart = () => {
    dispatch(closeDrawer)
    dispatch(openCart)
  }
  const handleClose = () => {
    dispatch(closeDrawer)
  }
  const classes = useStyles()
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
            <Link>
              <Button onClick={handleCart}>
                <Badge badgeContent={totalItems} color='secondary'>
                  <LocalMallIcon />
                </Badge>
              </Button>
            </Link>
          </Box>
        </Box>
        <Divider />
        <List className={classes.list} onClick={handleClose}>
          <ListItem>
            <Link to='/'>
              <Button>
                <ListItemText primary='Home' />
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to='/products'>
              <Button>
                <ListItemText primary='Products' />
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to='/about'>
              <Button>
                <ListItemText primary='About' />
              </Button>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </SwipeableDrawer>
    </>
  )
}

export default SideSheet
