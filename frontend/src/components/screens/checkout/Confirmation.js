import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Card, CardContent, Grid, Container } from '@material-ui/core'
import OrderItems from './OrderItems'

const Confirmation = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  //? camel case first name to show in order confirmation
  const camelCaseFirstName = (name) => {
    const nameArr = name.split(' ')
    const first = nameArr[0]
    return first[0].toUpperCase() + first.substring(1)
  }

  const firstName = camelCaseFirstName(shippingAddress.name)

  return (
    <Container textAlign='center' justify='center' alignItems='center' maxWidth='md'>
      <Box p={4} textAlign='center'>
        <Typography variant='h3'>Thanks for your order {firstName}</Typography>
      </Box>

      <Grid container justify='center' alignItems='center'>
        <Card>
          <CardContent>

            <OrderItems />

          </CardContent>
        </Card>
      </Grid>
    </Container>
  )
}

export default Confirmation
