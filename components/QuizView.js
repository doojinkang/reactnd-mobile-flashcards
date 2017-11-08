import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'

class QuizView extends Component {

  render() {
    const navigate = this.props.navigation.navigate
    const { questions } = this.props.navigation.state.params.deck
    return (
      <View style={styles.container}>
        <Text style={styles.count}> 1/2 </Text>
        <Text style={styles.title}>{questions[0].question}</Text>
        <Text onPress={() => console.log('Answer')} style={styles.answer}>
          Answer
        </Text>
        <TextButton onPress={() => console.log('Correct')} color='green'>
          Correct
        </TextButton>
        <TextButton onPress={() => console.log('Incorrect')} color='red' >
          Incorrect
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  count: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
  answer: {
    fontSize: 18,
    color: 'red',
    marginBottom: 30,
  },
})

export default QuizView

