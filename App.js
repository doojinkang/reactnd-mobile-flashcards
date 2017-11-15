import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import { StackNavigator } from 'react-navigation'
import { TabNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import AddQuiz from './components/AddQuiz'
import QuizView from './components/QuizView'

function UdaciStatusBar ({ backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Deck List',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-book' size={30} color={tintColor} />
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions : {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle-outline' size={30} color={tintColor} />
      }
    }
  }, {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'purple' : 'white',
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? 'white' : 'purple',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      }
    }
  }
)

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Home',
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
      title: 'Deck',
    }
  },
  AddQuiz: {
    screen: AddQuiz,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
      title: 'New Quiz',
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
      title: 'Quiz',
    }
  }
})

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer, devToolsEnhancer())}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor='purple' barStyle='light-content' />
          <Stack />
        </View>
      </Provider>
    )
  }
}
