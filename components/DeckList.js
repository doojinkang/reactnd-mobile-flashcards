import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { retrieveDecks } from '../actions'
import { getDecks } from '../utils/api'

class DeckList extends Component {

  componentDidMount() {
    getDecks()
      .then ((resultObj => {
        this.props.dispatch(retrieveDecks(resultObj))
      }))
  }

  render() {
    const navigate = this.props.navigation.navigate
    const { decks } = this.props

    // Object.keys(decks).map((key) => {
    //   console.log(decks[key].questions.length)
    // })

    return (
      <ScrollView>
        <View style={styles.container}>
          {decks && Object.keys(decks).map((key) => (
            <TouchableOpacity
              style={styles.deck}
              key={key}
              onPress={() => navigate('DeckDetail', { deck: decks[key] })} >
              <Text style={styles.title}>{key}</Text>
              <Text>{decks[key].questions.length} cards</Text>
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

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)

