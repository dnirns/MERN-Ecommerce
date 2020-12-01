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
  Box,
  Typography,
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'
import { makeStyles } from '@material-ui/styles'
import Breadcrumbs from '../common/Breadcrumbs'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    minWidth: '350px',
    justifyContent: 'center',
  },
}))
const Payment = () => {
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
                    // value={}
                    // onChange={(e) => setName(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='Card Number'
                    type='number'
                    // value={number}
                    // onChange={(e) => setNumber(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='Street name'
                    // value={street}
                    // onChange={(e) => setStreet(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='City'
                    // value={city}
                    // onChange={(e) => setCity(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='County'
                    // value={county}
                    // onChange={(e) => setCounty(e.target.value)}
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='Postcode'
                    // value={postcode}
                    // onChange={(e) => setPostcode(e.target.value)}
                    required='true'
                  />
                </FormGroup>
              </form>
              <Box display='flex' justifyContent='center'>
                <Button
                  variant='contained'
                  color='primary'
                  // onClick={sumbitAddressHandler}
                  disabled={false}
                >
                  <Box mr={1}>
                    <LockIcon fontSize='small'/>
                  </Box>
                  Submit Payment
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

export default Payment
