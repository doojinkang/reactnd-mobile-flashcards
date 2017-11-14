import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import TextButton from './TextButton'

class DeckDetail extends Component {

  render() {
    const navigate = this.props.navigation.navigate
    const { deckTitle } = this.props.navigation.state.params
    const deck = this.props.decks[deckTitle]
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subtitle}>{deck.questions.length} quiz</Text>
        <TextButton onPress={() => navigate('AddQuiz', { deck })} reverse>
          Add Quiz
        </TextButton>
        <TextButton
          onPress={() => navigate('QuizView', { deck })} >
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

// To update deck after add Quiz
// use Redux to get deck
function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckDetail)

