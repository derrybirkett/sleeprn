import { Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import Space from '../constants/Space';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  container: {
    flex: 1,
    backgroundColor: Colors.neutralWhite,
    padding: Space.sizeMedium,
  },
};
