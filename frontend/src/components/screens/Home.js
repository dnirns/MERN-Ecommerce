import React from 'react'
import Typography from '@material-ui/core/Typography'
import CartDrawer from '../nav/CartDrawer'

const Home = () => {
  return (
    <>
      <Typography variant='h2'>Home</Typography>
      <Typography variant='caption'>
        Featured products carousel gallery here...
      </Typography>
      <CartDrawer />
    </>
  )
}

export default Home
