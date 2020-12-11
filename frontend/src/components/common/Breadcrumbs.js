import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { Typography, Breadcrumbs, Box, Button } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyle = makeStyles({
  inactive: {
    opacity: '0.4',
  },
})

const CheckoutBreadcrumbs = ({ cart, shipping, payment }) => {
  const classes = useStyle()

  return (
    <Box mx={3} my={4}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        {cart ? (
          <Button color='secondary'>Cart</Button>
        ) : (
          <Typography className={classes.inactive}>Cart</Typography>
        )}
        {shipping ? (
          <Link color='inherit' to='/shipping'>
            Shipping
          </Link>
        ) : (
          <Typography className={classes.inactive}>Shipping</Typography>
        )}
        {payment ? (
          <Link color='inherit' to='/payment'>
            Payment
          </Link>
        ) : (
          <Typography className={classes.inactive}>Payment</Typography>
        )}
      </Breadcrumbs>
    </Box>
  )
}

export default CheckoutBreadcrumbs
