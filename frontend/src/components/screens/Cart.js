import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Error from '../common/Error'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  MenuItem,
  FormControl,
  Select,
  Button,
  InputLabel,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import { addToCart } from '../../actions/cartActions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  items: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '3px solid black',
  },
}))

const Cart = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  console.log(match)

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const classes = useStyles()
  return (
    <container className={classes.root}>
      <Typography variant='h2'>Cart</Typography>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid item>
          <div className={classes.items}>
            <Typography variant='body1'>Cart:</Typography>

            <>
              <List>
                {cartItems.map((item) => (
                  <ListItem key={item.product}>
                    <ListItemText primary={item.name.toUpperCase()} />
                    <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel>
                        Select Quantity
                      </InputLabel>
                      <Select
                        // open={open}
                        // onClose={handleCloseQty}
                        // onOpen={handleOpenQty}
                        value={item.qty}
                      >

                        {[...Array(item.qty).keys()].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                    <br />
                    <ListItemText
                      secondary={`Total price: £${item.price * item.qty}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge='end' aria-label='delete'>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </>
          </div>
        </Grid>
      </Grid>
    </container>
  )
}

export default Cart
