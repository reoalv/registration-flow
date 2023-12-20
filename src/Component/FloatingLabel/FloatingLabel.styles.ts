import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import type {FloatingLabelStyles} from './FloatingLabel.types';

const styles: FloatingLabelStyles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(6),
  },
  label: {
    fontSize: moderateScale(16),
    color: 'grey',
  },
});

export default styles;
