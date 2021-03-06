import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart } from '../../../actions/cartActions'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  Button,
} from '@material-ui/core'
import OrderItems from './OrderItems'

const Confirmation = () => {
  const cart = useSelector((state) => state.cart)

  const { shippingAddress } = cart

  const dispatch = useDispatch()

  const capitaliseFirstLetter = (name) => {
    const nameArr = name.split(' ')
    const first = nameArr[0]
    return first[0].toUpperCase() + first.substring(1)
  }

  const handleGoHome = () => {
    dispatch(emptyCart)
  }

  const firstName = capitaliseFirstLetter(shippingAddress.name)

  return (
    <Container
      textAlign='center'
      justify='center'
      alignItems='center'
      maxWidth='lg'
    >
      <Box p={6} textAlign='center'>
        <Typography variant='h5'>
          Thanks for your{' '}
          <span style={{ fontSize: '20px', opacity: '.6' }}>
            <em>(fake)</em>
          </span>{' '}
          order <strong>{firstName}</strong>
        </Typography>
      </Box>
      <Grid container justify='center' alignItems='center'>
        <Card>
          <CardContent>
            <OrderItems />
          </CardContent>
        </Card>
      </Grid>
      <Box textAlign='center' p={6}>
        <Link to='/'>
          <Button variant='outlined' color='primary' onClick={handleGoHome}>
            Go Home
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default Confirmation
