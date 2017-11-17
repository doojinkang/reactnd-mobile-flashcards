import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import FlipCard from 'react-native-flip-card'

import TextButton from './TextButton'
import { setLocalNotification, clearLocalNotification } from '../utils/helper'

class QuizView extends Component {
  state = {
    flip: false,
    current: 0,
    hit: 0,
  }

  correct = () => {
    const {current, hit} = this.state
    this.setState({current: current + 1})
    this.setState({hit    : hit     + 1})
  }

  incorrect = () => {
    const {current} = this.state
    this.setState({current: current + 1})
  }

  restart = () => {
    this.setState({current: 0, hit: 0})
  }

  render() {
    const navigate = this.props.navigation.navigate
    const { questions } = this.props.navigation.state.params.deck
    const { current, hit } = this.state

    if (current === questions.length ) {

      clearLocalNotification()
        .then(setLocalNotification)

      return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}> Total : {questions.length} </Text>
            <Text style={{fontSize: 20}}> Hit : {hit} </Text>
            <Text style={{fontSize: 20}}> Hit Ratio : {hit/questions.length * 100} % </Text>
            <TextButton
              onPress={this.restart}
              color='blue'>
              Restart
            </TextButton>
            <TextButton
              onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
              color='red'>
              Back
            </TextButton>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.count}> {current + 1} / {questions.length} </Text>

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
          // onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        >

          <View style={styles.face}>
            <Text style={styles.title}>{questions[current].question}</Text>
            <Text
              onPress={()=>{this.setState({flip: !this.state.flip})}}
              style={styles.answer}>
              Answer
            </Text>
            <TextButton onPress={this.correct} color='green'>
              Correct
            </TextButton>
            <TextButton onPress={this.incorrect} color='red' >
              Incorrect
            </TextButton>
          </View>

          <View style={styles.back}>
            <Text style={styles.title}>{questions[current].answer}</Text>
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

