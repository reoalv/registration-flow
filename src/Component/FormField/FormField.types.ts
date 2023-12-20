import * as React from 'react';
import type {ViewStyle} from 'react-native/types';
import type {
  FieldErrors,
  UseFormReturn,
  UseFormRegister,
  FieldValues,
  UseControllerProps,
  ControllerProps,
  RefCallBack,
} from 'react-hook-form';
import {KeyboardType} from '../TextInputField/TextInputField.types';
import Constants from '../../Constants/InputStatus';
import {TextStyle} from 'react-native';

export type InputSettings = {
  clearSpace?: boolean;
};

export type InputStatus =
  (typeof Constants.INPUT_STATUS)[keyof typeof Constants.INPUT_STATUS];

export type Props = {
  name: string;
  placeholder: string;
  linkText?: string;
  onLinkTextPress?: () => void;
  label?: string;
  rules?: UseControllerProps['rules'];
  maxLength?: number;
  keyboardType?: KeyboardType;
  alwaysValidate?: boolean;
  hintText?: string;
  inputSettings?: InputSettings;
  editable?: boolean;
  onFocused?: () => void;
  secureTextEntry?: boolean;
  isRegisterRef?: boolean;
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

export type PropsAndOpts = Props & Opts;

export type SetVisible = (visible: boolean) => void;
export type SetIsFocused = (value: boolean) => void;
export type SetIsSecure = React.Dispatch<React.SetStateAction<boolean>>;
export type FormContext = UseFormReturn;
export type GetValues = (name: string) => string;
export type Style = {
  hintContainer: ViewStyle;
  errorContainer: ViewStyle;
  linkText: TextStyle;
  errorText: TextStyle;
};

export type UseFormContextSpyInstance = jest.SpyInstance<
  React.ReactNode,
  [props: ControllerProps]
>;

export type OnChangeTextField = (
  props: PropsAndOpts,
  setValue: UseFormReturn['setValue'],
) => (value: string) => void;

export type TextInput = (
  props: PropsAndOpts,
  setVisible: SetVisible,
  setIsFocused: SetIsFocused,
  formContext: UseFormReturn,
) => React.ReactElement;

export type ControllerType = (
  props: Props,
  setVisible: SetVisible,
  setIsFocused: SetIsFocused,
  formContext: UseFormReturn,
) => React.ReactElement;

export type FloatingLabelType = (
  label: string,
  visible: boolean,
  isFocused: boolean,
  isError: boolean,
) => React.ReactElement;

export type HintOrErrorMessage = (
  name: string,
  errors: FieldErrors,
) => React.ReactElement | undefined;

export type GetTextInputStatusProps = (
  isFocused: boolean,
  isError: boolean,
) => InputStatus;

export type GetRefInput = (
  props: Props,
  register: UseFormRegister<FieldValues>,
) => RefCallBack | undefined;
