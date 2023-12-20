import {TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const borderInput: ViewStyle = {
  borderWidth: 1,
  backgroundColor: 'white',
  borderRadius: moderateScale(6),
  paddingVertical: moderateScale(7),
  paddingHorizontal: moderateScale(7),
};

const Styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(6),
    minHeight: 0,
  } as ViewStyle,
  inputText: {
    fontSize: moderateScale(18),
    paddingBottom: moderateScale(6),
    color: 'black',
    paddingTop: moderateScale(8),
    textAlign: 'left',
    flex: 1,
  } as TextStyle,
  counter: {
    flexShrink: 1,
    paddingVertical: moderateScale(6),
    paddingLeft: moderateScale(8),
    alignItems: 'flex-end',
    justifyContent: 'center',
  } as ViewStyle,
  suffix: {
    paddingVertical: moderateScale(6),
    paddingLeft: moderateScale(4),
    alignItems: 'flex-end',
    justifyContent: 'center',
  } as ViewStyle,
  defaultLine: {
    ...borderInput,
    borderColor: 'black',
  } as ViewStyle,
  activeLine: {
    ...borderInput,
    borderColor: 'green',
  } as ViewStyle,
  errorLine: {
    ...borderInput,
    borderColor: 'red',
  } as ViewStyle,
  inlineLeftNoteContainer: {
    marginRight: moderateScale(8),
  } as ViewStyle,
  placeholderColor: 'grey',
};

export default Styles;
