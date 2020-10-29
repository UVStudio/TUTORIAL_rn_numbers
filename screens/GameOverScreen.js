import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Texts from '../constants/Texts';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={Texts.subTitle}>The game is over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={Texts.bodyText}>
        Number of rounds it took: {props.guessRounds}
      </Text>
      <Text style={Texts.bodyText}>The number is: {props.userNumber}</Text>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOver;
