import React from 'react'
import {View, StyleSheet} from 'react-native'

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, //android's dropshadow, shadow is for iOS only
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  }
})

export default Card
