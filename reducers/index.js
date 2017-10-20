import {SET_DECKS} from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
    alert(JSON.stringify(action.decks))
      return {
        ...state,
        ...action.decks,
      }
    default:
      return state
  }
}

export default decks