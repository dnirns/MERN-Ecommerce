import { useDispatch } from 'react-redux'
import { closePopup } from '../../actions/popupActions'
import Snackbar from '@material-ui/core/Snackbar'

import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
  root: {
    textAlign: 'center',
    top: '0px',
  },
})

const SlideTransition = (props) => {
  return <Slide {...props} direction='down' />
}


const Popup = ({ open }) => {
  const dispatch = useDispatch()
  const classes = useStyle()

  const handleClose = () => {
    dispatch(closePopup)
  }

  return (
    <div>
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        key={SlideTransition}
        message='Item added to basket'
        autoHideDuration={1800}
      >


      </Snackbar>
    </div>
  )
}

export default Popup
