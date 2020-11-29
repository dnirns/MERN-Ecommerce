import { useDispatch } from 'react-redux'
import { closePopup } from '../../actions/popupActions'
import Snackbar from '@material-ui/core/Snackbar'

import IconButton from '@material-ui/core/Iconbutton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'

const TransitionDown = (props) => {
  return <Slide {...props} direction='down' />
}

const Popup = ({ open }) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closePopup)
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionDown}
        message='item added to basket'
        autoHideDuration={5000}
        action={
          <>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              {' '}
              <CloseIcon fontSize='small' />
            </IconButton>
          </>
        }
      />
    </div>
  )
}

export default Popup
