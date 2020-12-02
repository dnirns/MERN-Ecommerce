import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { saveShippingAddress } from '../../../actions/cartActions'
import { Box, Typography, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import Breadcrumbs from '../../common/Breadcrumbs'
import CardForm from './CardForm'
import PaypalForm from './PaypalForm'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    minWidth: 280,
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: 130,
    margin: 5,
  },
}))
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [fakeCard, setFakeCard] = useState('')
  const [cvv, setCvv] = useState('')



  const handleCVV = () => {
    const num = () => {
      return Math.floor(Math.random() * 900 + 100).toString()
    }
    setCvv(num)
  }

  const handleCard = () => {
    const num = () => {
      return Math.floor(1000 + Math.random() * 9000).toString()
    }
    setPaymentMethod('card')
    setFakeCard(`${num()}-${num()}-${num()}-${num()}`)
    handleCVV()
  }




  const classes = useStyles()

  return (
    <>
      <Breadcrumbs cart shipping payment current />
      <Box className={classes.box}>
        <Box my={3}>
          <Typography variant='h5'>Select Payment Method</Typography>
        </Box>
        <Box mb={3}>
          <Button
            className={classes.button}
            variant='outlined'
            onClick={handleCard}
          >
            Credit Card
          </Button>
          <Button
            className={classes.button}
            variant='outlined'
            onClick={() => setPaymentMethod('paypal')}
          >
            PayPal
          </Button>
        </Box>
        {paymentMethod === 'card' && <CardForm cardNumber={fakeCard} cvv={cvv}/>}
        {paymentMethod === 'paypal' && <PaypalForm />}
      </Box>
    </>
  )
}

export default Payment
