import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes, RoutesStackParams} from './Screen.types';
import RegistrationScreen from './RegistrationScreen';
import OtpVerificationScreen from './OtpVerificationScreen';
import WelcomHomeScreen from './WelcomHomeScreen/WelcomHomeScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/Store';

const Stack = createNativeStackNavigator<RoutesStackParams>();

const RoutesScreen = () => {
  const {email, password} = useSelector(
    (state: RootState) => state.AuthReducers,
  ).data;
  const haveEmailPassword = !!email && !!password;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={
          haveEmailPassword
            ? Routes.WelcomHomeScreen
            : Routes.RegistrationScreen
        }>
        <Stack.Screen
          name={Routes.RegistrationScreen}
          component={RegistrationScreen}
        />
        <Stack.Screen
          name={Routes.OtpVerificationScreen}
          component={OtpVerificationScreen}
        />
        <Stack.Screen
          name={Routes.WelcomHomeScreen}
          component={WelcomHomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesScreen;
