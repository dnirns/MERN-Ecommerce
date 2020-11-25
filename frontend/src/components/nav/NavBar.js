import { useState, useRef, useEffect } from 'react'

import {
  Toolbar,
  AppBar,
  Box,
  Grow,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  IconButton,
  Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '40px'
  }
}))


const NavBar = () => {

  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const prevOpen = useRef(open)


  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  const classes = useStyles()

  return (
    <AppBar position='sticky' className={classes.root}>
      <Toolbar variant='dense'>
        <Box display={{ xs: 'block', sm: 'none' }}>
          <div
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon fontSize='large' />
            </IconButton>
          </div>

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <div>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id='menu-list-grow'>
                      <MenuItem>
                        <Link
                          onClick={handleClose}
                          to='/'
                        >
                          HOME
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          onClick={handleClose}
                          to='/'
                        >
                          HOME
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          onClick={handleClose}
                          to='/products'
                        >
                          PRODUCTS
                        </Link>
                      </MenuItem>

                    </MenuList>
                  </ClickAwayListener>
                </div>
              </Grow>
            )}
          </Popper>
        </Box>

        <Box display={{ xs: 'none', sm: 'block' }}>
                <Button>
                  <Link to='/'>HOME</Link>
                </Button>
                <Button>
                  <Link to='/products'>PRODUCTS</Link>
                </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
