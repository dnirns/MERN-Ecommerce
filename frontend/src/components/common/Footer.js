import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
  root: {
    display: 'flex',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
})
const Footer = () => {
  const classes = useStyle()
  return (
    <>
      <Divider />
      <Container className={classes.root}>
        <Typography variant='caption'><em>A mock e-commerce project by Daniel Irons, these products are not really for sale, sorry.</em></Typography>
      </Container>
    </>
  )
}

export default Footer
