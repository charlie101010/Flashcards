import {SET_DECKS} from '../actions'
import _ from 'lodash'

function decks (state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
    alert(action.decks)
      return {
        ...state,
        decks: action.decks
      }
    default:
      return state;
  }
}

export default decks