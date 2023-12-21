import {TextInput, TextStyle, ViewStyle} from 'react-native';
import Constants from '../../Constants/InputStatus';

export type CodeFieldVariant =
  (typeof Constants.CODE_FIELD_VARIANT)[keyof typeof Constants.CODE_FIELD_VARIANT];

export type Props = {
  variant: CodeFieldVariant;
  onChange: (arg: string) => void;
};

export type RefMapping = {
  [key: number]: TextInput | null;
};

export type InputRef = React.MutableRefObject<RefMapping>;

export type Styles = {
  inputsContainer: ViewStyle;
  input: TextStyle;
  borderActive: ViewStyle;
  borderDefault: ViewStyle;
};

export type SetCode = (code: Array<string>) => void;

export type OnChangeProps = {
  refs: InputRef;
  length: number;
  code: Array<string>;
  setCode: SetCode;
  onChange: (arg: string) => void;
  index: number;
};

export type Opts = {
  value: string;
  index: number;
  refs: InputRef;
  length: number;
  code: Array<string>;
  setCode: SetCode;
  onChange: (arg: string) => void;
};
