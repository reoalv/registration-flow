import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';
import {
  FormProvider,
  UseControllerProps,
  UseFormReturn,
  useForm,
} from 'react-hook-form';
import FormField from '../../Component/FormField/FormField';
import {
  FormFieldRegisterType,
  HidePassType,
  RegistrationScreenNavigationProps,
  RegistrationScreenProps,
  SetHidePassType,
} from './RegistrationScreen.types';
import FormFieldConstants from '../../Constants/FormField';
import styles from './RegistrationScreen.styles';
import {emailPattern} from './RegistrationScreen.config';
import {validatePasswordWithErrorHint} from '../../Utils/PasswordValidation';
import Colors from '../../Utils/Color';
import {Routes} from '../Screen.types';
import Constants from '../../Constants/FormField';

const {
  checkLengthWithHint,
  checkLowerCaseWithHint,
  checkSymbolsWithHint,
  checkUpperCaseWithHint,
} = validatePasswordWithErrorHint;

const {EMAIL_FORM_NAME, PASSWORD_FORM_NAME} = Constants;

const _renderButton = (
  formContext: UseFormReturn<FormFieldRegisterType>,
  navigation: RegistrationScreenNavigationProps,
) => {
  const {formState, getValues, setValue} = formContext;
  const {isValid} = formState;
  const {email, password} = getValues();

  return (
    <Button
      title="Submit"
      onPress={() => {
        navigation.navigate(Routes.OtpVerificationScreen, {email, password});
        setValue(EMAIL_FORM_NAME, '');
        setValue(PASSWORD_FORM_NAME, '');
      }}
      color={Colors.brandColor.darkGreen}
      disabled={!isValid}
    />
  );
};

const _getEmailRules = (): UseControllerProps['rules'] => ({
  required: 'Masukkan Email Anda',
  pattern: {
    value: emailPattern,
    message: 'Penulisan email belum sesuai',
  },
});

const _renderFormEmail = (
  formContext: UseFormReturn<FormFieldRegisterType>,
): React.ReactElement => (
  <View style={styles.formContainer}>
    <FormProvider {...formContext}>
      <FormField
        name={FormFieldConstants.EMAIL_FORM_NAME}
        label={'Email'}
        placeholder={'Email'}
        rules={_getEmailRules()}
      />
    </FormProvider>
  </View>
);

const _getPasswordRules = (): UseControllerProps['rules'] => ({
  required: 'Masukkan Password Anda',
  validate: {
    upperCase: checkUpperCaseWithHint,
    lowerCase: checkLowerCaseWithHint,
    length: checkLengthWithHint,
    number: checkSymbolsWithHint,
  },
});

const _renderFormPassword = (
  formContext: UseFormReturn<FormFieldRegisterType>,
  hidePass: HidePassType,
  setHidePass: SetHidePassType,
): React.ReactElement => (
  <View style={styles.formContainer}>
    <FormProvider {...formContext}>
      <FormField
        name={FormFieldConstants.PASSWORD_FORM_NAME}
        label={'Password'}
        placeholder={'Password'}
        rules={_getPasswordRules()}
        linkText={hidePass ? 'Show' : 'Hide'}
        secureTextEntry={hidePass}
        onLinkTextPress={() => setHidePass(!hidePass)}
      />
    </FormProvider>
  </View>
);

const RegistrationScreen = (
  props: RegistrationScreenProps,
): React.ReactElement => {
  const {navigation} = props;
  const [hidePass, setHidePass] = React.useState<boolean>(true);
  const formContext = useForm<FormFieldRegisterType>();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={{flex: 1}}>
        <Text style={styles.stepText}>Step 1 of 2</Text>
        {_renderFormEmail(formContext)}
        {_renderFormPassword(formContext, hidePass, setHidePass)}
      </View>
      {_renderButton(formContext, navigation)}
    </ScrollView>
  );
};

export default RegistrationScreen;
