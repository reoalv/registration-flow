import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextStyle, ViewStyle} from 'react-native';
import {Routes, RoutesStackParams} from '../Screen.types';

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

export type RegistrationScreenNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.RegistrationScreen
>;

export type RegistrationScreenProps = {
  navigation: RegistrationScreenNavigationProps;
};
