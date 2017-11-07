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
    const deckTitles = Object.keys(this.state)
    return (
      <ScrollView>
        <View style={styles.container}>
          { deckTitles.map((title) => (
            <Text
              style={styles.deck}
              key={title}
              onPress={() => navigate('DeckDetail', { deck: this.state[title] })}
            >{title}</Text>
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
  deck: {
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'black',
  }
})

export default DeckList
