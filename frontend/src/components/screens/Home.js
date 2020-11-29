import React from 'react'
import Typography from '@material-ui/core/Typography'
import SideSheet from '../nav/NavDrawer'
import Popup from '../common/Popup'



const Home = () => {


  return (
    <>
      <SideSheet />
      <Typography variant='h2'>Home</Typography>
      <Typography variant='caption'>
        Featured products carousel gallery here...
      </Typography>
      <Popup/>
    </>
  )
}

export default Home
