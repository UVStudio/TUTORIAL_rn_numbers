import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Texts from '../constants/Texts';
import MainButton from '../components/MainButton';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={Texts.subTitle}>The game is over!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={Texts.bodyText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.guessRounds}</Text> rounds to
          guess the correct number of{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </Text>
        <MainButton onPress={props.onNewGame}>New Game</MainButton>
      </View>
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
  resultContainer: {
    width: '80%',
    marginBottom: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOver;
