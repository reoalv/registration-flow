import * as React from 'react';
import {Animated, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import styles from './FloatingLabel.styles';
import type {Props, UseAnimation} from './FloatingLabel.types';

const _isVisibleOrInputFocused = (props: Props): boolean =>
  props.visible || props.inputStatus === 'active';

const _useAnimation: UseAnimation = (
  topAnimation,
  opacityAnimation,
  top,
  opacity,
): void => {
  Animated.timing(topAnimation, {
    toValue: top,
    duration: 200,
    useNativeDriver: false,
  }).start();

  Animated.timing(opacityAnimation, {
    toValue: opacity,
    duration: 200,
    useNativeDriver: false,
  }).start();
};

const _setFieldAnimation = (visible?: boolean) => {
  const top = moderateScale(visible ? 0 : 15);
  const opacity = visible ? 1 : 0;
  const [topAnimation] = React.useState(new Animated.Value(top));
  const [opacityAnimation] = React.useState(new Animated.Value(opacity));

  React.useEffect(() => {
    _useAnimation(topAnimation, opacityAnimation, top, opacity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return {topAnimation, opacityAnimation};
};

const _renderTextField = (props: Props): React.ReactElement => (
  <Text style={styles.label}>{props.label}</Text>
);

const FloatingLabel = (props: Props): React.ReactElement => {
  const {topAnimation: top, opacityAnimation: opacity} = _setFieldAnimation(
    _isVisibleOrInputFocused(props),
  );
  const animationStyle = {top, opacity};

  return (
    <Animated.View style={[styles.container, animationStyle]}>
      {_renderTextField(props)}
    </Animated.View>
  );
};

export default FloatingLabel;
