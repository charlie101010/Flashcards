import {SET_DECKS, NEW_DECK, ADD_CARD} from '../actions'
import _ from 'lodash'

function decks (state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
      return {
        ...state,
        ...action.decks
      }
      case NEW_DECK:

      return {
        ...state,
        ...action.deck
      }
        
     case ADD_CARD:
      const title = action.title;
      const newState = {...state};
      // if empty I am assigning a initial state for the title
      newState[title] = newState[title] || {questions: [], title};
      newState[title].questions.push({
        question: action.question,
        answer: action.answer,
      });
      return newState;

    default:
      return state;
  }
}

export default decks