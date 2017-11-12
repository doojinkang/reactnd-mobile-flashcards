import { RETRIEVE_DECKS, ADD_DECK, ADD_QUIZ } from '../actions'

function decks ( state = {}, action) {
  switch (action.type) {
    case RETRIEVE_DECKS:
      return {
        ...action.decks
      }
    case ADD_DECK:  // deck = { newTitle: { title: deckTitle, questions: []} }
      return {
        ...state,
        ...{ [action.deckTitle]: { title: [action.deckTitle], questions: []} }
      }
    case ADD_QUIZ: // deck = { newTitle: { title: 'newTitle', questions: [{ question: '...', answer: '...' }]} }
      return {
        ...state,
        ...{ [action.deckTitle]: {
                title: [action.deckTitle],
                questions: [
                  { question: [action.question], answer: [action.answer] }
                ]
              }}
      }
    default:
      return state
  }
}

export default decks
