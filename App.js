import React from 'react'
import { StackNavigator } from 'react-navigation'

import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import QuizView from './components/QuizView'

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        height: 80,
        backgroundColor: 'purple',
      },
      title: 'Deck List',
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        height: 80,
        backgroundColor: 'purple',
      },
      title: 'Deck Detail',
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        height: 80,
        backgroundColor: 'purple',
      },
      title: 'Quiz View',
    }
  }
})

export default class App extends React.Component {

  render() {
    return (
      <Stack />
    )
  }
}
