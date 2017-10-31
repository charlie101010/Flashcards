import {SET_DECKS, NEW_DECK, ADD_CARD} from '../actions'
import _ from 'lodash'

function decks (state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
      return {
        ...state,
        decks: action.decks
      }
      case NEW_DECK:
      return {
        ...state,
       [action.title]: {
            title: action.title,
            questions: []
        }
      }
    case ADD_CARD:
    const title = action.title 
    const editedDeck = state.decks[title]
    editedDeck.questions.push({question: action.question, answer: action.answer})
      return {
         ...state,
         editedDeck
        }

    default:
      return state;
  }
}

export default decks