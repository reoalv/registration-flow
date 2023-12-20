import {View, Text} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {FormProvider, UseFormReturn, useForm} from 'react-hook-form';
import FormField from '../../Component/FormField/FormField';
import {
  FormFieldRegisterType,
  HidePassType,
  SetHidePassType,
} from './RegistrationScreen.types';
import FormFieldConstants from '../../Constants/FormField';

const _renderFormEmail = (
  formContext: UseFormReturn<FormFieldRegisterType>,
): React.ReactElement => (
  <View>
    <FormProvider {...formContext}>
      <FormField
        name={FormFieldConstants.EMAIL_FORM_NAME}
        label={'Email'}
        placeholder={'Email'}
      />
    </FormProvider>
  </View>
);

const _renderFormPassword = (
  formContext: UseFormReturn<FormFieldRegisterType>,
  hidePass: HidePassType,
  setHidePass: SetHidePassType,
): React.ReactElement => (
  <View>
    <FormProvider {...formContext}>
      <FormField
        name={FormFieldConstants.PASSWORD_FORM_NAME}
        label={'Password'}
        placeholder={'Password'}
        linkText={hidePass ? 'Show' : 'Hide'}
        secureTextEntry={hidePass}
        onLinkTextPress={() => setHidePass(!hidePass)}
      />
    </FormProvider>
  </View>
);

const RegistrationScreen = () => {
  const [hidePass, setHidePass] = React.useState<boolean>(false);
  const formContext = useForm<FormFieldRegisterType>();

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: moderateScale(30)}}>RegistrationScreen</Text>
      {_renderFormEmail(formContext)}
      {_renderFormPassword(formContext, hidePass, setHidePass)}
    </View>
  );
};

export default RegistrationScreen;
