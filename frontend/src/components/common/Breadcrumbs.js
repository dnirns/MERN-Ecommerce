import { useDispatch } from 'react-redux'
import { openCart } from '../../actions/cartActions'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
  inactive: {
    opacity: '0.4',
  },
})

const CheckoutBreadcrumbs = ({
  cart,
  shipping,
  payment,
  complete,
  current,
}) => {
  const classes = useStyle()
  const dispatch = useDispatch()
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
