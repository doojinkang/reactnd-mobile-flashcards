import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TextButton( {children, onPress, reverse }) {
  return (
    <TouchableOpacity
      style={ reverse? styles.buttonReverse : styles.button }
      onPress = {onPress}>
      <Text style={ reverse? styles.btnTextReverse : styles.btnText }>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 10,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  buttonReverse: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'purple',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 10,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextReverse: {
    color: 'purple',
    fontSize: 22,
    textAlign: 'center',
  },
})