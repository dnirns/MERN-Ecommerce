
import { DRAWER_OPEN, DRAWER_CLOSED } from '../constants/navConstants'

export const openDrawer = (dispatch) => {
  dispatch({ type: DRAWER_OPEN, payload: true})
}
export const closeDrawer = (dispatch) => {
  dispatch({ type: DRAWER_CLOSED, payload: false})
}
