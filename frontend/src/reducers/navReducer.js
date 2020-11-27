import { DRAWER_OPEN, DRAWER_CLOSED } from '../constants/navConstants'

export const navReducer = (state = { navOpen: false }, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return { navOpen: true}
    case DRAWER_CLOSED:
      return { navOpen: false}
    default:
      return state
  }
}
