import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { saveShippingAddress } from '../../actions/cartActions'
import { makeStyles } from '@material-ui/styles'
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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    minWidth: 280,
    justifyContent: 'center',
  },
}))

const CardForm = ({ cardNumber, cvv }) => {
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'))
  const classes = useStyles()
  return (
    <div>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Card p={2}>
          <CardContent>
            <Box textAlign='center'>
              <Typography variant='h4'>Card Details</Typography>
            </Box>
            <form className={classes.root} noValidate autoComplete='off'>
              <FormGroup>
                <TextField
                  id='standard-helperText'
                  label='Name'
                  required='true'
                />
                <TextField
                  disabled
                  id='standard-helperText'
                  label='Card Number'
                  required='true'
                  value={cardNumber}
                />
                <TextField
                  disabled
                  id='standard-helperText'
                  label='CVV'
                  required='true'
                  value={cvv}
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
              <Button variant='contained' color='primary' disabled={false}>
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
    </div>
  )
}

export default CardForm
