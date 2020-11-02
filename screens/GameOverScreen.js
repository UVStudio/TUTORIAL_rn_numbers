import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
import Texts from '../constants/Texts';
import MainButton from '../components/MainButton';

const GameOver = (props) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
    //clean up function here to make sure we only ever have one addEventListener active
  });

  let imageContainerStyle = styles.imageContainer;

  if (availableDeviceWidth < 350) {
    imageContainerStyle = styles.imageContainerSmall;
  }

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={Texts.subTitle}>The game is over!</Text>
        <View style={imageContainerStyle}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.05,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 * 0.5,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height * 0.025,
  },
  imageContainerSmall: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    borderRadius: Dimensions.get('window').width * 0.8 * 0.5,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height * 0.025,
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
