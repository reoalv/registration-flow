import {StyleSheet} from 'react-native';
import {Styles} from './WelcomHomeScreen.types';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const {brandColor} = Colors;

const styles: Styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: brandColor.softGreen,
    padding: moderateScale(18),
  },
  textWelcome: {
    fontSize: moderateScale(42),
    color: brandColor.darkGreen,
  },
});

export default styles;
