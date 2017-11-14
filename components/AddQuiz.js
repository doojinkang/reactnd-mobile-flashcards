import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

class AddQuiz extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Input new Quiz</Text>
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
    marginBottom: 30,
  },
  input_ios: {
    height: 40,
    fontSize: 24,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  input_android: {
    height: 40,
    width: 200,
    fontSize: 24,
    marginBottom: 20,
  },
})

export default AddQuiz
