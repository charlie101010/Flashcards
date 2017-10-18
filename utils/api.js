import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'Flashcards: decks'



export function getDecks () {
   AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results)=>{
    	return JSON.parse(results)
    })
}

export function getDeck (id) {
  	return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results)=>{
  		const data = JSON.parse(results)
  		return data[id]
  })
 
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title][questions] = {...data[title][questions], card}
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })}


export function saveDeckTitle (title) {
 	return AsyncStorage.setItem(DECK_STORAGE_KEY, title)
   
}
