import {TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const {brandColor, neutralColor, commonColor} = Colors;

const borderInput: ViewStyle = {
  borderWidth: moderateScale(1.2),
  backgroundColor: neutralColor.white,
  borderRadius: moderateScale(6),
  paddingVertical: moderateScale(7),
  paddingHorizontal: moderateScale(7),
};

const Styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(4),
    minHeight: 0,
  } as ViewStyle,
  inputText: {
    fontSize: moderateScale(18),
    paddingBottom: moderateScale(6),
    color: neutralColor.black,
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
    borderColor: neutralColor.softGrey,
  } as ViewStyle,
  activeLine: {
    ...borderInput,
    borderColor: brandColor.primaryGreen,
  } as ViewStyle,
  errorLine: {
    ...borderInput,
    borderColor: commonColor.dangerRed,
  } as ViewStyle,
  inlineLeftNoteContainer: {
    marginRight: moderateScale(8),
  } as ViewStyle,
  placeholderColor: neutralColor.grey,
};

export default Styles;
