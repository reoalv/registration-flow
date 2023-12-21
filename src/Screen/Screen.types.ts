import {OtpVerificationParams} from './OtpVerificationScreen/OtpVerificationScreen.types';

export enum Routes {
  RegistrationScreen = 'RegistrationScreen',
  OtpVerificationScreen = 'OtpVerificationScreen',
  WelcomHomeScreen = 'WelcomHomeScreen',
}

export type RoutesStackParams = {
  [Routes.RegistrationScreen]: undefined;
  [Routes.OtpVerificationScreen]: OtpVerificationParams;
  [Routes.WelcomHomeScreen]: undefined;
};
