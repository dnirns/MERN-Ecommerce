import { useDispatch, useSelector } from 'react-redux'
import { openDrawer } from '../../actions/navActions'
import { openCart } from '../../actions/cartActions'
import { Toolbar, AppBar, Box, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '40px',
  },
  icon: {
    marginLeft: 'auto',
  },
  menuLink: {
    color: 'white',
  },
}))

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
    <AppBar
      position='sticky'
      className={classes.root}
      style={{ backgroundColor: '#1b1b1b' }}
    >
      <Toolbar variant='dense'>
        <Box display={{ sm: 'block', md: 'none' }}>
          <div aria-haspopup='true' onClick={handleOpenDrawer}>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon fontSize='large' />
            </IconButton>
          </div>
        </Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
          <Link className={classes.menuLink} to='/'>
            <Button className={classes.menuLink}>HOME</Button>
          </Link>
          <Link className={classes.menuLink} to='/products'>
            <Button className={classes.menuLink}>PRODUCTS</Button>
          </Link>
        </Box>

        <Box className={classes.icon}>
          <Link>
            <Button className={classes.menuLink} onClick={handleOpenCart}>
              <Badge badgeContent={totalItems} color='primary'>
                <LocalMallIcon />
              </Badge>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
