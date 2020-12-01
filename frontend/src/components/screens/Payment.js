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
    minWidth: 280,
    justifyContent: 'center',
  },
}))
const Payment = () => {
  const classes = useStyles()

  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'))

  console.log(date)

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
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='Card Number'
                    type='password'
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='CVV'
                    type='password'
                    required='true'
                  />
                  <TextField
                    id='standard-helperText'
                    label='Expiry'
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required='true'
                  />
                </FormGroup>
              </form>
              <Box display='flex' justifyContent='center'>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={false}
                >
                  <Box mr={1}>
                    <LockIcon fontSize='small' />
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
