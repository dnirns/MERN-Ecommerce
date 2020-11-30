import { useDispatch } from 'react-redux'
import { closePopup } from '../../actions/popupActions'
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/styles'


const useStyle = makeStyles({
  root: {
    textAlign: 'center',
  },
})

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
        TransitionComponent={Fade}
        message='item added to basket'
        autoHideDuration={4000}
      />
    </div>
  )
}

export default Popup
