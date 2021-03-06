import { AsyncStorage } from 'react-native'


const DECK_STORAGE_KEY = 'Flashcards'


export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {
    return JSON.parse(result);
  });
}
export function getDeck (id) {
  	return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results)=>{
  		const data = JSON.parse(results)
  		return data[id]
  })
 
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(result => {
            const data = JSON.parse(result);	
            data[title].questions.push(card);
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
        })
}

export function saveDeckTitle (title) {
 	  return AsyncStorage.mergeItem( DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
   
}

export function removeDeck (title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results);
            data[title] = undefined;
            delete data[title];
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
        })
}