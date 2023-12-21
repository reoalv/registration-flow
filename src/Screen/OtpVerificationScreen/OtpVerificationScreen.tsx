import * as React from 'react';
import {Alert, AlertButton, ScrollView, Text, View} from 'react-native';
import OtpCodeField from '../../Component/OtpCodeField/OtpCodeField';
import styles from './OtpVerificationScreen.styles';
import {
  OtpVerificationNavigationProps,
  OtpVerificationParams,
  OtpVerificationScreenProps,
} from './OtpVerificationScreen.types';
import {_getDescAlert, _getTitleAlert} from './OtpVerificationScreen.config';
import {Routes} from '../Screen.types';
import {setPasswordEmail} from '../../Redux/Action/Auth';
import {useDispatch} from 'react-redux';
import {AnyActionFn} from '../../Redux/Store';

const DUMMY_SUCCESS = '1111';

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

const useCheckCode = (
  code: string,
  navigation: OtpVerificationNavigationProps,
  emailPassword: OtpVerificationParams,
  useSaveData: AnyActionFn,
) =>
  React.useCallback(() => {
    if (code.length === 4) {
      const isSuccess = code === DUMMY_SUCCESS;
      renderAlert(isSuccess, navigation, emailPassword, useSaveData);
    }
  }, [code, navigation, emailPassword, useSaveData]);

const OtpVerificationScreen = (props: OtpVerificationScreenProps) => {
  const {
    route: {params},
  } = props;
  const [code, setCode] = React.useState('');
  const useSaveData = useDispatch();

  useCheckCode(code, props.navigation, params, useSaveData)();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={{flex: 1}}>
        <Text style={styles.stepText}>Step 2 of 2</Text>
        {<OtpCodeField variant="fourCode" onChange={setCode} />}
      </View>
    </ScrollView>
  );
};

export default OtpVerificationScreen;
