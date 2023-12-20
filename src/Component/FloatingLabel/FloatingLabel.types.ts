import type {Animated, ViewStyle} from 'react-native/types';
import {InputStatus} from '../FormField/FormField.types';
import {TextStyle} from 'react-native';

export type Props = {
  label: string;
  visible?: boolean;
  inputStatus?: InputStatus;
  accessibilityLabel: string;
};

export type FloatingLabelStyles = {
  container: ViewStyle;
  label: TextStyle;
};

export type UseAnimation = (
  topAnimation: Animated.Value,
  opacityAnimation: Animated.Value,
  top: number,
  opacity: number,
) => void;
