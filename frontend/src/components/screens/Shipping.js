import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../actions/cartActions'
import {
  TextField,
  FormGroup,
  Grid,
  Card,
  CardContent,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Breadcrumbs from '../common/Breadcrumbs'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: '350px',
  },
}))

const Shipping = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [name, setName] = useState(shippingAddress.name)
  const [number, setNumber] = useState(shippingAddress.number)
  const [street, setStreet] = useState(shippingAddress.street)
  const [city, setCity] = useState(shippingAddress.city)
  const [county, setCounty] = useState(shippingAddress.county)
  const [postcode, setPostcode] = useState(shippingAddress.postcode)

  const dispatch = useDispatch()

  const sumbitAddressHandler = (e) => {
    dispatch(saveShippingAddress({ name, number, street, city, county, postcode }))
    history.push('/payment')
  }

  const classes = useStyles()
  return (
    <>
    <Breadcrumbs cart shipping current/>
    <Grid container direction='row' justify='center' alignItems='center'>
      <Card p={2}>
        <CardContent>
          <form className={classes.root} noValidate autoComplete='off'>
            <FormGroup>
              <TextField
                id='standard-helperText'
                label='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id='standard-helperText'
                label='House number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <TextField
                id='standard-helperText'
                label='Street name'
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <TextField
                id='standard-helperText'
                label='City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <TextField
                id='standard-helperText'
                label='County'
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              />
              <TextField
                id='standard-helperText'
                label='Postcode'
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </FormGroup>
            <Button
              variant='outlined'
              color='primary'
              onClick={sumbitAddressHandler}
            >
              Continue to payment
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
    </>
  )
}

export default Shipping
