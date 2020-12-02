import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
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

const PaypalForm = () => {
  const classes = useStyles()

  return (
    <div>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Card p={2}>
          <CardContent>
            <Box textAlign='center'>
              <Typography variant='h4'>PayPal</Typography>
            </Box>

            <form className={classes.root} noValidate autoComplete='off'>
              <FormGroup></FormGroup>
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

export default PaypalForm
