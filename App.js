import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDecks } from './utils/api'

export default class App extends React.Component {

  state = {}

  componentDidMount() {
    getDecks()
      .then ((result => {
        this.setState(() => (result))
      }))
  }

  render() {
    const deckTitles = Object.keys(this.state)
    return (
      <View style={styles.container}>
        { deckTitles.map((title) => (
          <Text style={styles.deck} key={title}>{title}</Text>
        ))}
      </View>
    );
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
});
