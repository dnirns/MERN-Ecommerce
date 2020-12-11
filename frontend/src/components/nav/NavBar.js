import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openDrawer } from '../../actions/navActions'
import { openCart } from '../../actions/cartActions'
import {
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Slide,
  Button,
  Badge,
  useScrollTrigger,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { makeStyles } from '@material-ui/core/styles'

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles({
  icon: {
    marginLeft: 'auto',
  },
  menuLink: {
    fontFamily: 'Work Sans',
    color: 'white',
    textTransform: 'lowercase',
  },
})

const NavBar = () => {
  const dispatch = useDispatch()

  const handleOpenDrawer = () => {
    dispatch(openDrawer)
  }
  const handleOpenCart = () => {
    dispatch(openCart)
  }

  const cart = useSelector((state) => state.cart)

  const totalItems = cart.cartItems.reduce(
    (accumilator, item) => accumilator + item.qty,
    0
  )
  const classes = useStyles()

  return (
    <HideOnScroll>
      <AppBar position='sticky'>
        <Toolbar variant='dense'>
          <Box display={{ sm: 'block', md: 'none' }}>
            <div aria-haspopup='true' onClick={handleOpenDrawer}>
              <IconButton edge='start' color='inherit' aria-label='menu'>
                <MenuIcon fontSize='medium' />
              </IconButton>
            </div>
          </Box>
          <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
            <Link to='/'>
              <Button className={classes.menuLink}>Home</Button>
            </Link>
            <Link to='/products'>
              <Button className={classes.menuLink}>PRODUCTS</Button>
            </Link>
            <Link to='/about'>
              <Button className={classes.menuLink}>About</Button>
            </Link>
          </Box>

          <Box className={classes.icon}>
            <Button className={classes.menuLink} onClick={handleOpenCart}>
              <Badge badgeContent={totalItems} color='secondary'>
                <LocalMallIcon fontSize='medium' />
              </Badge>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
export default NavBar
