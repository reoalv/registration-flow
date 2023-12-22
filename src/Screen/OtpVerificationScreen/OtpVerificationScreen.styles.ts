import {StyleSheet} from 'react-native';
import {Styles} from './OtpVerificationScreen.types';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const {brandColor, neutralColor} = Colors;

const styles: Styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: brandColor.softGreen,
    padding: moderateScale(18),
  },
  stepText: {
    fontSize: moderateScale(28),
    color: neutralColor.black,
    marginBottom: moderateScale(12),
  },
  containerDesc: {
    paddingVertical: moderateScale(18),
  },
  textTitleDesc: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    color: neutralColor.grey,
    marginBottom: moderateScale(6),
  },
  textDesc: {
    fontSize: moderateScale(18),
    color: neutralColor.grey,
  },
});

export default styles;
