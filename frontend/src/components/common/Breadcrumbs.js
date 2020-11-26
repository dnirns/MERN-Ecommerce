import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
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

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize='small' />}
      aria-label='breadcrumb'
    >
      {cart ? (
        <Link color='inherit' to='/cart'>
          Cart
        </Link>
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
  )
}

export default CheckoutBreadcrumbs
