import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Cart from '../screens/Cart'

const CartModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal open={open} onClose={handleClose}>
        <div>

      <Cart/>




        </div>
      </Modal>
    </>
  )
}

export default CartModal
