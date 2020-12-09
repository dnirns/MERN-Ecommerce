import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { saveShippingAddress } from '../../../actions/cartActions'
import { Box, Typography, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import Breadcrumbs from '../../common/Breadcrumbs'
import CardForm from './CardForm'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    minWidth: 240,
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 40,
    margin: '0px 10px',
    padding: '10px',
  },
  img: {
    width: '70px',
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
        <Box my={2} pb={1}>
          <Typography variant='h5'>Select Payment Method:</Typography>
        </Box>
        <Box mt={2} mb={3}>
          <Button
            className={classes.button}
            variant='outlined'
            onClick={handleCard}
          >
            <img
              className={classes.img}
              alt='Credit Card Logos'
              title='Credit Card Logos'
              src='http://www.credit-card-logos.com/images/visa_credit-card-logos/visa_mastercard_2.gif'
              border='0'
            />
          </Button>
        </Box>
        {paymentMethod === 'card' && (
          <CardForm cardNumber={fakeCard} cvv={cvv} />
        )}
      </Box>
    </>
  )
}

export default Payment
