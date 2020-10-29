import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Number of rounds it took: {props.guessRounds}</Text>
      <Text>The number is: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onNewGame}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOver;
