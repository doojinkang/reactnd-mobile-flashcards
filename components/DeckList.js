import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

import { getDecks } from '../utils/api'

class DeckList extends Component {
  state = {}

  componentDidMount() {
    getDecks()
      .then ((result => {
        this.setState(() => (result))
      }))
  }

  render() {
    const navigate = this.props.navigation.navigate
    const decks = this.state

    // Object.keys(decks).map((title) => {
    //   console.log(decks[title].questions.length)
    // })

    return (
      <ScrollView>
        <View style={styles.container}>
          {Object.keys(decks).map((title) => (
            <TouchableOpacity
              style={styles.deck}
              key={title}
              onPress={() => navigate('DeckDetail', { deck: this.state[title] })} >
              <Text style={styles.title}>{title}</Text>
              <Text>{decks[title].questions.length} cards</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  deck: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'black',
  }
})

export default DeckList
