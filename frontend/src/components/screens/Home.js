import React from 'react'
import Typography from '@material-ui/core/Typography'
import SideSheet from '../nav/NavDrawer'



const Home = () => {


  return (
    <>
      <SideSheet />
      <Typography variant='h2'>Home</Typography>
      <Typography variant='caption'>
        Featured products carousel gallery here...
      </Typography>
    </>
  )
}

export default Home
