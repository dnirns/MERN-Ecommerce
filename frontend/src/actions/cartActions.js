import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_OPEN, CART_CLOSED, CART_EMPTY_ON_PURCHASE } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.stock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}



export const openCart = (dispatch) => {
  dispatch({ type: CART_OPEN, payload: true})
}
export const closeCart = (dispatch) => {
  dispatch({ type: CART_CLOSED, payload: false})
}


export const emptyCart = (dispatch) => {
  dispatch({
    type: CART_EMPTY_ON_PURCHASE,
    payload: {
      cartItems: [],
    }
  })
  localStorage.removeItem('cartItems')
}
