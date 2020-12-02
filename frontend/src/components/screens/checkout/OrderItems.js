import { List, ListItem, ListItemText, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'

const useStyle = makeStyles({
  root: {
    padding: 10,
  },
  list: {
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  item: {
    width: 100,
    textAlign: 'center',
  },
})

const OrderItems = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const classes = useStyle()
  const totalPrice = cartItems
    .reduce((accumilator, item) => accumilator + item.qty * item.price, 0)
    .toFixed(2)

  return (
    <List className={classes.list}>
      {cartItems.map((item) => (
        <>
          <ListItem key={item.product}>
            <ListItemText className={classes.item} primary={item.name} />
            <br />
            <ListItemText className={classes.item} primary={item.qty} />
            <br />
            <ListItemText
              className={classes.item}
              secondary={`Price: £${parseInt(item.price * item.qty)}`}
            />
          </ListItem>
          <Divider variant='middle' />
        </>
      ))}{' '}
      <Box>
        <ListItem>
          <ListItemText className={classes.item}>
            Order total: <strong>£{totalPrice}</strong>
          </ListItemText>
        </ListItem>
      </Box>
    </List>
  )
}

export default OrderItems
