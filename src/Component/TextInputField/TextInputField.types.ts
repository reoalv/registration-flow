import type {FieldErrors} from 'react-hook-form';
import {TextInput, ViewStyle} from 'react-native';
import Constants from '../../Constants/InputStatus';

export type KeyboardType =
  (typeof Constants.KEYBOARD_TYPE)[keyof typeof Constants.KEYBOARD_TYPE];

export type InputSettings = {
  clearSpace?: boolean;
};

export type Props = {
  isError: boolean;
  placeholder?: string;
  name?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: (value: string) => void;
  keyboardType: KeyboardType;
  defaultValue?: string;
  value?: string;
  leftNote?: React.ReactElement;
  isLeftNoteInline?: boolean;
  counter?: number;
  maxLength?: number;
  secureTextEntry?: boolean;
  suffix?: React.ReactElement;
  autoFocus?: boolean;
  editable?: boolean;
  inputRef?: React.RefCallback<TextInput>;
};

export type Opts = {
  name: string;
  onBlur: () => void;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
  maxLength?: number;
  errors: FieldErrors;
};

export type AdditionalProps = {
  placeholderTextColor: string;
  keyboardType: KeyboardType;
  defaultValue: string | undefined;
  value: string | undefined;
  leftNote?: React.ReactElement;
  secureTextEntry: boolean | undefined;
  maxLength: number | undefined;
  autoFocus: boolean | undefined;
  editable?: boolean;
  ref?: React.RefCallback<TextInput>;
};

export type CustomProps = {
  placeholder?: string;
};

export type SetLineStyle = (style: ViewStyle) => void;
export type SetIsFocus = (isFocus: boolean) => void;

export type State = {
  isFocus: boolean;
  setIsFocus: SetIsFocus;
  setLineStyle: SetLineStyle;
};
