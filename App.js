import React from 'react'
import { StackNavigator } from 'react-navigation'

import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'

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

  }
})

export default class App extends React.Component {

  render() {
    return (
      <Stack />
    )
  }
}
