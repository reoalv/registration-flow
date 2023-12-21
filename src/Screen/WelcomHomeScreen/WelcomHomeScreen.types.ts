import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextStyle, ViewStyle} from 'react-native';
import {Routes, RoutesStackParams} from '../Screen.types';

export type Styles = {
  scrollContainer: ViewStyle;
  textWelcome: TextStyle;
};

export type WelcomHomeScreenNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.WelcomHomeScreen
>;

export type WelcomHomeScreenProps = {
  navigation: WelcomHomeScreenNavigationProps;
};
