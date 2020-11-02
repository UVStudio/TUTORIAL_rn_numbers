import { Dimensions } from 'react-native';

export default {
  title: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  landscapeTitle: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'open-sans-bold',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'open-sans-bold',
  },
  bodyText: {
    fontSize: Dimensions.get('window').height < 600 ? 14 : 16,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
};
