import { POPUP_OPEN, POPUP_CLOSED } from '../constants/popupConstants'

export const popupReducer = (state = { popupOpen: false }, action) => {
  switch (action.type) {
    case POPUP_OPEN:
      return { popupOpen: true}
    case POPUP_CLOSED:
      return { popupOpen: false}
    default:
      return state
  }
}
