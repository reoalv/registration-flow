import * as React from 'react';
import {Alert, AlertButton, ScrollView, Text, View} from 'react-native';
import OtpCodeField from '../../Component/OtpCodeField/OtpCodeField';
import styles from './OtpVerificationScreen.styles';
import {
  OtpVerificationNavigationProps,
  OtpVerificationParams,
  OtpVerificationScreenProps,
  SetCode,
} from './OtpVerificationScreen.types';
import {_getDescAlert, _getTitleAlert} from './OtpVerificationScreen.config';
import {Routes} from '../Screen.types';
import {setPasswordEmail} from '../../Redux/Action/Auth';
import {useDispatch} from 'react-redux';
import {AnyActionFn} from '../../Redux/Store';
import Countdown from '../../Component/Countdown/Countdown';

const DUMMY_SUCCESS = '111111';

const onPressSuccess =
  (
    navigation: OtpVerificationNavigationProps,
    emailPassword: OtpVerificationParams,
    useSaveData: AnyActionFn,
  ) =>
  async () => {
    await useSaveData(setPasswordEmail(emailPassword));
    navigation.replace(Routes.WelcomHomeScreen);
  };

const _getValueButtonAlert = (
  success: boolean,
  navigation: OtpVerificationNavigationProps,
  emailPassword: OtpVerificationParams,
  useSaveData: AnyActionFn,
) =>
  !success
    ? {
        text: 'Cancel',
        style: 'cancel',
      }
    : {
        text: 'Masuk',
        onPress: onPressSuccess(navigation, emailPassword, useSaveData),
      };

const renderAlert = (
  success: boolean,
  navigation: OtpVerificationNavigationProps,
  emailPassword: OtpVerificationParams,
  useSaveData: AnyActionFn,
) => {
  Alert.alert(_getTitleAlert(success), _getDescAlert(success), [
    _getValueButtonAlert(
      success,
      navigation,
      emailPassword,
      useSaveData,
    ) as AlertButton,
  ]);
};

const _useHooksCheckCode = (
  code: string,
  navigation: OtpVerificationNavigationProps,
  emailPassword: OtpVerificationParams,
  useSaveData: AnyActionFn,
) => {
  //checkCode function
  const useCheckCode = React.useCallback(() => {
    if (code.length === 6) {
      const isSuccess = code === DUMMY_SUCCESS;
      renderAlert(isSuccess, navigation, emailPassword, useSaveData);
    }
  }, [code, emailPassword, navigation, useSaveData]);

  //checkCode effect
  return React.useEffect(useCheckCode, [useCheckCode]);
};

const renderDesc = (email: string) => (
  <View style={styles.containerDesc}>
    <Text style={styles.textTitleDesc}>Enter authentication code</Text>
    <Text style={styles.textDesc}>Enter 6-digit sent to email {email}</Text>
  </View>
);

const renderField = (setCode: SetCode, email: string) => {
  return (
    <React.Fragment>
      <View style={{flex: 1}}>
        {renderDesc(email)}
        {<OtpCodeField variant="sixCode" onChange={setCode} />}
      </View>
      {<Countdown duration={30} />}
    </React.Fragment>
  );
};

const OtpVerificationScreen = (props: OtpVerificationScreenProps) => {
  const {
    route: {params},
  } = props;
  const [code, setCode] = React.useState('');
  const useSaveData = useDispatch();

  _useHooksCheckCode(code, props.navigation, params, useSaveData);

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.stepText}>Step 2 of 2</Text>
      {renderField(setCode, params.email)}
    </ScrollView>
  );
};

export default OtpVerificationScreen;
