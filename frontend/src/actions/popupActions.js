
import { POPUP_OPEN, POPUP_CLOSED } from '../constants/popupConstants'

export const openPopup = (dispatch) => {
  dispatch({ type: POPUP_OPEN, payload: true})
}
export const closePopup = (dispatch) => {
  dispatch({ type: POPUP_CLOSED, payload: false})
}
