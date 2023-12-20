import {StyleSheet} from 'react-native';
import {Style} from './FormField.types';
import {moderateScale} from 'react-native-size-matters';

const styles: Style = StyleSheet.create({
  hintContainer: {
    marginTop: moderateScale(4), // TextInput already have marginBottom: 6
  },
  linkText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
  },
});

export default styles;
