import {TextStyle, ViewStyle} from 'react-native';

export type Props = {
  duration: number;
};

export type Styles = {
  container: ViewStyle;
  duration: TextStyle;
  resendActive: TextStyle;
  resendDisable: TextStyle;
};

export type SetTimer = React.Dispatch<React.SetStateAction<number>>;
