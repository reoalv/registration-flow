import Colors from '../../Utils/Color';
import {WIDTH_WINDOW} from '../../Utils/Dimension';
import {moderateScale} from 'react-native-size-matters';
import {Styles} from './OtpCodeField.types';
import {StyleSheet} from 'react-native';

export const combineStyle = (length: number) =>
  StyleSheet.create({
    inputWidth: {
      width:
        (WIDTH_WINDOW -
          moderateScale(20) * 2 -
          (moderateScale(20) / 2) * length) /
        length,
      marginHorizontal: moderateScale(length === 4 ? 10 : 4),
    },
    inputHeight: {
      height: length === 4 ? moderateScale(60) : null,
    },
  });

export const styles: Styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: 'row',
    paddingVertical: moderateScale(12),
    position: 'relative',
  },
  input: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(99),
    zIndex: -1,
    textAlign: 'center',
    backgroundColor: Colors.neutralColor.white,
    color: Colors.neutralColor.black,
    flex: 1,
  },
  borderActive: {
    borderColor: Colors.brandColor.darkGreen,
    borderWidth: moderateScale(1.2),
  },
  borderDefault: {
    borderColor: Colors.neutralColor.softGrey,
    borderWidth: moderateScale(1.2),
  },
});
