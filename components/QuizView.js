import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FlipCard from 'react-native-flip-card'

import TextButton from './TextButton'

class QuizView extends Component {
  state = {
    flip: false
  }

  render() {
    const navigate = this.props.navigation.navigate
    const { questions } = this.props.navigation.state.params.deck
    return (
      <View style={styles.container}>
        <Text style={styles.count}> 1/2 </Text>

        <FlipCard
          style={styles.card}
          flip={this.state.flip}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          clickable={false}
          alignHeight={false}
          alignWidth={false}
          onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        >

          <View style={styles.face}>
            <Text style={styles.title}>{questions[0].question}</Text>
            <Text
              onPress={()=>{this.setState({flip: !this.state.flip})}}
              style={styles.answer}>
              Answer
            </Text>
            <TextButton onPress={() => console.log('Correct')} color='green'>
              Correct
            </TextButton>
            <TextButton onPress={() => console.log('Incorrect')} color='red' >
              Incorrect
            </TextButton>
          </View>

          <View style={styles.back}>
            <Text style={styles.title}>{questions[0].answer}</Text>
            <Text
              onPress={()=>{this.setState({flip: !this.state.flip})}}
              style={styles.answer}>
              Back
            </Text>


          </View>

        </FlipCard>

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

  card: {
    width: 400,
    marginTop: 100,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  face: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: 300,
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

