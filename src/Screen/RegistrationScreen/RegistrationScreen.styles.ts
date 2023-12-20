import {StyleSheet} from 'react-native';
import {Styles} from './RegistrationScreen.types';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const {brandColor, neutralColor} = Colors;

const styles: Styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: brandColor.softGreen,
    padding: moderateScale(18),
  },
  formContainer: {
    marginVertical: moderateScale(6),
  },
  stepText: {
    fontSize: moderateScale(28),
    color: neutralColor.black,
    marginBottom: moderateScale(12),
  },
});

export default styles;
