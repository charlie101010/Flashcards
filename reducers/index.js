import {SET_DECKS} from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
    alert(action.decks)
      return action.decks
    default:
      return state
  }
}

export default decks