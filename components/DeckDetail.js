import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class DeckDetail extends Component {

  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <Text>
        {deck.title}
      </Text>
    )
  }
}

export default DeckDetail

