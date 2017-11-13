import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'

class AddDeck extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deck Title</Text>
        <TextButton onPress={() => console.log('add deck')} reverse>
          ADD
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

export default AddDeck

