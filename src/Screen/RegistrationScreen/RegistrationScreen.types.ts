import {TextStyle, ViewStyle} from 'react-native';

export type SetHidePassType = React.Dispatch<React.SetStateAction<boolean>>;
export type HidePassType = boolean;

export type FormFieldRegisterType = {
  email: string;
  password: string;
};

export type Styles = {
  scrollContainer: ViewStyle;
  formContainer: ViewStyle;
  stepText: TextStyle;
};
