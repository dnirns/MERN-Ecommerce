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
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { addToCart } from '../../actions/cartActions'

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

  return (
    <div>
      <Typography variant='h2'>Cart</Typography>
      {cartItems.map((item) => (
        <>
        <h1>{item.name}</h1>
        <p>{item.qty}</p>
        </>
      ))}
    </div>
  )
}

export default Cart
