import { AsyncStorage } from 'react-native'
const FLASHCARD_STORAGE_KEY = 'UdaciMobile:flashcard'

const Dummy = {
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
  },
  Expo: {
    title: 'Expo',
    questions: [
      {
        question: 'What is Expo?',
        answer: 'Tools for developing react-native'
      }
    ]
  }
}


// return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then ((results) => {
      console.log('getDecks', results)
      if (results === null) {
        AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(Dummy))
        return Dummy
      }
      else {
        return JSON.parse(results)
      }
    })
}

// take in a single id argument and return the deck associated with that id.
export function getDeck(id) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then ((results) => {
      let all = JSON.parse(results)
      return theDeck = all[id]
    })
}

// take in a single title argument and add it to the decks.
export function submitDeck(deckTitle) {
  let val = { [deckTitle]: { title: [deckTitle], questions: []} }
  console.log('submitDeck', JSON.stringify(val))
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,
    JSON.stringify(val)
  )
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function submitQuiz(deckTitle, question, answer) {
  getDeck(deckTitle)
    .then ((resultObj => {
      let questions = resultObj.questions
      questions.push({ question, answer })
      let val = { [deckTitle]: { title: [deckTitle], questions} }
      console.log('submitQuiz', JSON.stringify(val))
      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,
        JSON.stringify(val)
      )
    }))
}
