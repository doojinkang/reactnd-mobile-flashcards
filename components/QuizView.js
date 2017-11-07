import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'

class QuizView extends Component {

  render() {
    const navigate = this.props.navigation.navigate
    const { questions } = this.props.navigation.state.params.deck
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{questions[0].question}</Text>
        <TextButton onPress={() => console.log('Answer')} reverse>
          Answer
        </TextButton>
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

export default QuizView

