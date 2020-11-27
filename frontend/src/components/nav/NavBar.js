import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openDrawer, closeDrawer } from '../../actions/navActions'

import {
  Toolbar,
  AppBar,
  Box,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
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
    padding: '0px 10px',
  },
}))

const NavBar = () => {

  const dispatch = useDispatch()

  const handleOpenDrawer = () => {
    dispatch(openDrawer)
  }
  const handleCloseDrawer = () => {
    dispatch(closeDrawer)
  }

  const classes = useStyles()

  return (
    <AppBar
      position='sticky'
      className={classes.root}
      style={{ backgroundColor: '#1b1b1b' }}
    >
      <Toolbar variant='dense'>
        <Box display={{ sm: 'block', md: 'none' }}>
          <div
            aria-haspopup='true'
            onClick={handleOpenDrawer}
          >
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon fontSize='large' />
            </IconButton>
          </div>
        </Box>
        <Box display={{ sm: 'none', md: 'block' }}>
          <Link className={classes.menuLink} to='/'>
            HOME
          </Link>
          <Link className={classes.menuLink} to='/products'>
            PRODUCTS
          </Link>

        </Box>

        <Box className={classes.icon}>
          <Link to='/cart' className={classes.menuLink}>
            <ShoppingCartIcon />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
