export const SET_DECKS= 'SET_DECKS'
export const ADD_CARD= 'ADD_CARD'
export const NEW_DECK= 'NEW_DECK'

export const setDecks = (decks) => {
	return{
		type: SET_DECKS,
		decks
	};
}

export const addCard = (title, card) => {
	return{
		type: ADD_CARD,
		title: title,
		question: card.question,
		answer: card.answer
	};
}

export function newDeck ( deck ) {
    return {
        type: NEW_DECK,
        deck
    }
}
