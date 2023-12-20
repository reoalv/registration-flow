import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import type {FloatingLabelStyles} from './FloatingLabel.types';
import Colors from '../../Utils/Color';

const styles: FloatingLabelStyles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(6),
  },
  label: {
    fontSize: moderateScale(16),
    color: Colors.neutralColor.grey,
  },
});

export default styles;
