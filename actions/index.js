export const RETRIEVE_DECKS = 'RETRIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUIZ = 'ADD_QUIZ'

export function retrieveDecks(decks) {
  return {
    type: RETRIEVE_DECKS,
    decks,          // decks object {}
  }
}

export function addDeck(deckTitle) {
  return {
    type: ADD_DECK,
    deckTitle,      // title string
  }
}

export function addQuiz(deckTitle, question, answer) {
  return {
    type: ADD_QUIZ,
    deckTitle,      // title string
    question,       // question string
    answer,         // answer string
  }
}
