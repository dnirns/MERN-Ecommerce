import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
  root: {
    display: 'flex',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})
const Footer = () => {
  const classes = useStyle()
  return (
    <>
      <Divider />
      <Container className={classes.root}>
        <Typography variant='subtitle2'>Footer</Typography>
      </Container>
    </>
  )
}

export default Footer
