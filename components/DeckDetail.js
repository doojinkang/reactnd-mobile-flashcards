import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'

class DeckDetail extends Component {

  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
        <TextButton onPress={() => console.log('add Card')} reverse>
          Add Card
        </TextButton>
        <TextButton onPress={() => console.log('start Quiz')}>
          Start Quiz
        </TextButton>
      </View>
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
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
})

export default DeckDetail

