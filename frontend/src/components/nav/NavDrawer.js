import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'
import ListItemText from '@material-ui/core/ListItemText'
import CloseIcon from '@material-ui/icons/Close'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'

import { closeDrawer } from '../../actions/navActions'
import { openCart } from '../../actions/cartActions'

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
                <Badge badgeContent={totalItems} color='primary'>
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
        </List>
      </SwipeableDrawer>
    </>
  )
}

export default SideSheet
