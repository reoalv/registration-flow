import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes, RoutesStackParams} from './Screen.types';
import RegistrationScreen from './RegistrationScreen';

const Stack = createNativeStackNavigator<RoutesStackParams>();

const RoutesScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.RegistrationScreen}>
        <Stack.Screen
          name={Routes.RegistrationScreen}
          component={RegistrationScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesScreen;
