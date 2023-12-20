import {StyleSheet} from 'react-native';
import {Style} from './FormField.types';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const {brandColor, commonColor} = Colors;

const styles: Style = StyleSheet.create({
  hintContainer: {
    height: moderateScale(16),
  },
  errorContainer: {
    marginTop: moderateScale(2),
  },
  linkText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: brandColor.darkGreen,
    textDecorationLine: 'underline',
    textDecorationColor: brandColor.darkGreen,
  },
  errorText: {
    fontSize: moderateScale(13),
    fontWeight: '500',
    color: commonColor.dangerRed,
  },
});

export default styles;
