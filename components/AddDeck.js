import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import TextButton from './TextButton'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'

class AddDeck extends Component {

  state = {
    text: ''
  }

  submit() {
    const {text} = this.state
    const {decks} = this.props

    if ( decks.includes(text) ) {
      alert("Already Exist")
      return
    }

    // update redux
    if (text) {
      this.props.dispatch(addDeck(text))
    }
    this.setState(() => ({text: ''}))

    // navigate to DeckList
    this.props.navigation.dispatch(NavigationActions.back({
      key: 'AddDeck'
    }))

    // Save to DB
    submitDeck(text)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Input new deck name</Text>
        <TextInput
          style={ Platform.OS === 'ios' ? styles.input_ios : styles.input_android }
          placeholder="New Deck"
          value={this.state.text}
          onChangeText={(text) => this.setState({text: text.trim()})}
        />
        <TextButton onPress={() => this.submit()} reverse>
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

function mapStateToProps(decks) {
  return {
    decks: Object.keys(decks)
  }
}

export default connect(mapStateToProps)(AddDeck)
