import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'Flashcards: decks'



export function getDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse(results))
}

export function getDeck (id) {
  	return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results)=>{
  		const data = JSON.parse(results)
  		return data[id]
  })
 
}

export function addCardToDeck (title, card) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [{title}][questions]: card
  }))
}


export function saveDeckTitle (title) {
 	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title] = {}
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    })
   
}


export function setInitialData() =>{
    
  const initialData ={
	  React: {
	    title: 'React',
	    questions: [
	      {
	        question: 'What is React?',
	        answer: 'A library for managing user interfaces'
	      },
	      {
	        question: 'Where do you make Ajax requests in React?',
	        answer: 'The componentDidMount lifecycle event'
	      }
	    ]
	  },
	  JavaScript: {
	    title: 'JavaScript',
	    questions: [
	      {
	        question: 'What is a closure?',
	        answer: 'The combination of a function and the lexical environment within which that function was declared.'
	      }
	    ]
	  }
	}

	AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialData))
  }
