import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextStyle, ViewStyle} from 'react-native';
import {Routes, RoutesStackParams} from '../Screen.types';

export type Styles = {
  scrollContainer: ViewStyle;
  stepText: TextStyle;
};

export type OtpVerificationNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.OtpVerificationScreen
>;

export type OtpVerificationParams = {
  email: string;
  password: string;
};

export type OtpVerificationScreenProps = {
  navigation: OtpVerificationNavigationProps;
  route: {
    params: OtpVerificationParams;
  };
};
