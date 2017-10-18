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
    [title]: card
  }))
}


export function saveDeckTitle (title) {
 	return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title] = {}
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
   
}
