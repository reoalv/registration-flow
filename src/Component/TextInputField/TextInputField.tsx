import * as React from 'react';
import {View, TextInput} from 'react-native';
import styles from './TextInputField.styles';
import {
  AdditionalProps,
  CustomProps,
  Props,
  SetIsFocus,
  SetLineStyle,
  State,
} from './TextInputField.types';

const _onFocus =
  (setLineStyle: SetLineStyle, props: Props, setIsFocus: SetIsFocus) => () => {
    setLineStyle(styles.activeLine);
    props.onFocus?.();
    setIsFocus(true);
  };

const _onChange =
  (props: Props, setLineStyle: SetLineStyle) => (value: string) => {
    const style = props.isError ? styles.errorLine : styles.activeLine;

    setLineStyle(style);
    props.onChange?.(value);
  };

const _onBlur =
  (setLineStyle: SetLineStyle, props: Props, setIsFocus: SetIsFocus) => () => {
    props.onBlur?.(); // Execute onBlur action first
    setIsFocus(false); // Update the isFocus state
    const style = props.isError ? styles.errorLine : styles.defaultLine;
    setLineStyle(style);
  };

const _getPlaceholder = (props: Props, state: State): CustomProps => {
  const {isFocus} = state;
  const placeholder = isFocus ? '' : props.placeholder;

  return {
    placeholder,
  };
};

const _setLinesStyle = (
  props: Props,
  setLineStyle: SetLineStyle,
  isFocus: boolean,
): void => {
  if (props.isError) {
    return setLineStyle(styles.errorLine);
  }

  if (isFocus) {
    return setLineStyle(styles.activeLine);
  }

  return setLineStyle(styles.defaultLine);
};

const _getAdditionalProps = (opts: Props): AdditionalProps => ({
  placeholderTextColor: styles.placeholderColor,
  keyboardType: opts.keyboardType,
  defaultValue: opts.defaultValue,
  value: opts.value,
  leftNote: opts.leftNote,
  secureTextEntry: opts.secureTextEntry,
  maxLength: opts.maxLength,
  autoFocus: opts.autoFocus,
  editable: opts.editable,
  ref: opts.inputRef,
});

const _renderTextInput = (props: Props, state: State): React.ReactElement => {
  const {setLineStyle, setIsFocus, isFocus} = state;

  return (
    <TextInput
      {..._getPlaceholder(props, {setLineStyle, setIsFocus, isFocus})}
      {..._getAdditionalProps(props)}
      onFocus={_onFocus(setLineStyle, props, setIsFocus)}
      onBlur={_onBlur(setLineStyle, props, setIsFocus)}
      onChangeText={_onChange(props, setLineStyle)}
      style={styles.inputText}
    />
  );
};

const _renderSuffixAccessories = (
  suffix?: React.ReactElement,
): React.ReactElement => <View style={styles.suffix}>{suffix}</View>;

const useTextInputHooks = (
  props: Props,
  setLineStyle: SetLineStyle,
  isFocus: boolean,
): void => {
  React.useEffect(() => {
    _setLinesStyle(props, setLineStyle, isFocus);
  }, [setLineStyle, props, isFocus]);
};

const TextInputField = (props: Props): React.ReactElement => {
  const [lineStyle, setLineStyle] = React.useState(styles.defaultLine);
  const [isFocus, setIsFocus] = React.useState(false);
  const {suffix} = props;

  useTextInputHooks(props, setLineStyle, isFocus);

  return (
    <View style={[styles.container, lineStyle]}>
      {_renderTextInput(props, {setLineStyle, setIsFocus, isFocus})}
      {_renderSuffixAccessories(suffix)}
    </View>
  );
};

export default TextInputField;
