import * as React from 'react';
import {Text, View} from 'react-native';
import {Controller, useFormContext} from 'react-hook-form';
import type {
  ControllerRenderProps,
  FieldValues,
  UseFormSetValue,
  UseFormStateReturn,
} from 'react-hook-form';
import TextInputField from '../TextInputField';
import type {Props as TextInputProps} from '../TextInputField/TextInputField.types';
import {defaultProps, emptySpaceRegex} from './FormField.config';
import styles from './FormField.styles';
import type {
  Props,
  SetIsFocused,
  SetVisible,
  PropsAndOpts,
  OnChangeTextField,
  TextInput,
  ControllerType,
  HintOrErrorMessage,
  FloatingLabelType,
  GetTextInputStatusProps,
  GetRefInput,
} from './FormField.types';
import FloatingLabel from '../FloatingLabel';
import InputStatusConstants from '../../Constants/InputStatus';

const _onBlur = (props: PropsAndOpts, setIsFocused: SetIsFocused) => () => {
  setIsFocused(false);
  props.onBlur();
};

const _onFocus = (props: PropsAndOpts, setIsFocused: SetIsFocused) => () => {
  if (props.onFocused) {
    props.onFocused();
  }
  setIsFocused(true);
};

const _getTextInputProps = (props: PropsAndOpts): Partial<TextInputProps> => ({
  name: props.name,
  placeholder: props.placeholder,
  value: props.value,
  maxLength: props.maxLength,
  editable: props.editable,
  secureTextEntry: props.secureTextEntry,
});

const onChangeTextField: OnChangeTextField = (props, setValue) => value => {
  const _value = props.inputSettings?.clearSpace
    ? value.replace(emptySpaceRegex, '')
    : value;
  setValue(props.name, _value, {shouldValidate: props.alwaysValidate});
};

const _getTextInputCallback = (
  props: PropsAndOpts,
  setIsFocused: SetIsFocused,
  setValue: UseFormSetValue<FieldValues>,
): Partial<TextInputProps> => ({
  onBlur: _onBlur(props, setIsFocused),
  onFocus: _onFocus(props, setIsFocused),
  onChange: onChangeTextField(props, setValue),
});

const _useInitialValue = (value: string, setVisible: SetVisible): void => {
  React.useEffect(() => {
    const isHasValue = value?.toString().length > 0;

    if (isHasValue) {
      setVisible(true);
    }
  }, [setVisible, value]);
};

const _renderLinkButton = (props: PropsAndOpts): React.ReactElement => {
  if (!props.linkText) {
    return <View />;
  }

  return (
    <Text onPress={props.onLinkTextPress} style={styles.linkText}>
      {props.linkText}
    </Text>
  );
};

const _getRefInput: GetRefInput = (props, register) =>
  props.isRegisterRef ? register(props.name).ref : undefined;

const _renderTextInput: TextInput = (
  props: PropsAndOpts,
  setVisible,
  setIsFocused,
  formContext,
) => {
  const {
    formState: {errors},
    setValue,
    register,
  } = formContext;

  _useInitialValue(props.value, setVisible);

  return (
    <TextInputField
      {..._getTextInputProps(props)}
      {..._getTextInputCallback(props, setIsFocused, setValue)}
      inputRef={_getRefInput(props, register)}
      isError={!!errors[props.name]}
      suffix={_renderLinkButton(props)}
      keyboardType={props.keyboardType || 'default'}
    />
  );
};

const _renderErrorMessage: HintOrErrorMessage = (name, errors) => {
  const error = errors[name] || {};

  if (!errors[name]) {
    return <View style={styles.hintContainer} />;
  }
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{String(error.message)}</Text>
    </View>
  );
};

const getStateAndPropsForm = (
  formState: UseFormStateReturn<FieldValues>,
  field: ControllerRenderProps,
  props: Props,
) => ({
  ...formState,
  ...field,
  ...props,
});

const _renderController: ControllerType = (
  props: Props,
  setVisible,
  setIsFocused,
  formContext,
) => {
  const {control} = formContext;

  return (
    <Controller
      control={control}
      name={props.name}
      rules={props.rules}
      render={({field, formState}) =>
        _renderTextInput(
          getStateAndPropsForm(formState, field, props),
          setVisible,
          setIsFocused,
          formContext,
        )
      }
    />
  );
};

const _getTextInputStatusProps: GetTextInputStatusProps = (
  isFocused,
  isError,
) => {
  if (isError) {
    return InputStatusConstants.INPUT_STATUS.ERROR;
  }

  if (isFocused) {
    return InputStatusConstants.INPUT_STATUS.DEFAULT;
  }

  return InputStatusConstants.INPUT_STATUS.DEFAULT;
};

const _renderFloatingLabel: FloatingLabelType = (
  label,
  visible,
  isFocused,
  isError,
) => (
  <FloatingLabel
    {...{
      label,
      visible,
      accessibilityLabel: `Label_${label}`,
      inputStatus: _getTextInputStatusProps(isFocused, isError),
    }}
  />
);

const _useFloatingLabel = (formValue: string, isFocused: boolean) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (formValue || isFocused) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [formValue, setVisible, isFocused]);

  return {visible, setVisible};
};

const FormField = (props: Props): React.ReactElement => {
  const [isFocused, setIsFocused] = React.useState(false);

  const formContext = useFormContext();
  const {
    watch,
    formState: {errors},
  } = formContext;

  const {visible, setVisible} = _useFloatingLabel(
    watch<string>(props.name),
    isFocused,
  );

  return (
    <View>
      {props.label &&
        _renderFloatingLabel(
          props.label,
          visible,
          isFocused,
          !!errors[props.name],
        )}
      {_renderController(props, setVisible, setIsFocused, formContext)}
      {_renderErrorMessage(props.name, errors)}
    </View>
  );
};

FormField.defaultProps = defaultProps;

export default FormField;
