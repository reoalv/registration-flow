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
  SetHidePassType,
} from './RegistrationScreen.types';
import FormFieldConstants from '../../Constants/FormField';
import styles from './RegistrationScreen.styles';
import {emailPattern} from './RegistrationScreen.config';
import {validatePasswordWithErrorHint} from '../../Utils/PasswordValidation';
import Colors from '../../Utils/Color';

const {
  checkLengthWithHint,
  checkLowerCaseWithHint,
  checkSymbolsWithHint,
  checkUpperCaseWithHint,
} = validatePasswordWithErrorHint;

const _renderButton = (formContext: UseFormReturn<FormFieldRegisterType>) => {
  const {formState} = formContext;
  const {isValid} = formState;

  return (
    <Button
      title="Submit"
      onPress={() => console.log('lanjut')}
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
    number: checkSymbolsWithHint,
    length: checkLengthWithHint,
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

const RegistrationScreen = () => {
  const [hidePass, setHidePass] = React.useState<boolean>(true);
  const formContext = useForm<FormFieldRegisterType>();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={{flex: 1}}>
        <Text style={styles.stepText}>Step 1 of 2</Text>
        {_renderFormEmail(formContext)}
        {_renderFormPassword(formContext, hidePass, setHidePass)}
      </View>
      {_renderButton(formContext)}
    </ScrollView>
  );
};

export default RegistrationScreen;
