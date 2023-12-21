import {View, Text, ScrollView, Button} from 'react-native';
import React from 'react';
import styles from './WelcomHomeScreen.styles';
import Colors from '../../Utils/Color';
import {
  WelcomHomeScreenNavigationProps,
  WelcomHomeScreenProps,
} from './WelcomHomeScreen.types';
import {Routes} from '../Screen.types';
import {clearAll} from '../../Utils/Storage';

const handleLogout =
  (navigation: WelcomHomeScreenNavigationProps) => async () => {
    navigation.replace(Routes.RegistrationScreen);
    await clearAll();
  };

const _renderButton = (navigation: WelcomHomeScreenNavigationProps) => {
  return (
    <Button
      title="Log Out"
      onPress={handleLogout(navigation)}
      color={Colors.commonColor.dangerRed}
    />
  );
};

const WelcomHomeScreen = (props: WelcomHomeScreenProps) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={{flex: 1}}>
        <Text style={styles.textWelcome}>Welcome!</Text>
      </View>
      {_renderButton(props.navigation)}
    </ScrollView>
  );
};

export default WelcomHomeScreen;
