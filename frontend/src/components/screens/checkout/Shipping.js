import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../../actions/cartActions'
import {
  TextField,
  FormGroup,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Breadcrumbs from '../../common/Breadcrumbs'
import AutocompleteCountries from '../../data/AutocompleteCountries'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    minWidth: 280,
    justifyContent: 'center',
  },
}))

const Shipping = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const country = useSelector((state) => state.cart.shippingAddress.country)
  const { shippingAddress } = cart
  const [name, setName] = useState(shippingAddress.name)
  const [number, setNumber] = useState(shippingAddress.number)
  const [street, setStreet] = useState(shippingAddress.street)
  const [city, setCity] = useState(shippingAddress.city)
  const [county, setCounty] = useState(shippingAddress.county)
  const [postcode, setPostcode] = useState(shippingAddress.postcode)

  const dispatch = useDispatch()

  const sumbitAddressHandler = () => {
    dispatch(
      saveShippingAddress({ name, number, street, city, county, postcode, country })
    )
    history.push('/payment')
  }

  const classes = useStyles()
  return (
    <>
      <Breadcrumbs cart shipping current />
      <Box py={6}>
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
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='House number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='Street name'
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='County'
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='Postcode'
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    required='true'
                  />
                  <AutocompleteCountries/>
                </FormGroup>
              </form>
              <Box display='flex' justifyContent='center'>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={sumbitAddressHandler}
                  disabled={
                    !name || !number || !street || !city || !county || !postcode || !country
                      ? true
                      : false
                  }
                >
                  Continue to payment
                </Button>
              </Box>
              <Box mx={3} mt={3}>
                <Typography variant='body2'>* required</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </>
  )
}

export default Shipping
