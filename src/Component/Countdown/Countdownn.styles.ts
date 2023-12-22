import {StyleSheet} from 'react-native';
import {Styles} from './Countdown.types';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const styles: Styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(12),
    alignItems: 'center',
  },
  duration: {
    color: Colors.neutralColor.grey,
    fontSize: moderateScale(18),
    fontWeight: '400',
    marginRight: moderateScale(4),
  },
  resendActive: {
    color: Colors.brandColor.darkGreen,
    fontSize: moderateScale(18),
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
  resendDisable: {
    color: Colors.neutralColor.grey,
    fontSize: moderateScale(18),
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default styles;
