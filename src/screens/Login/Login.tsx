import React from 'react';
import {View, Text} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import styles from './styles';

const Login = () => {
  const googleAuth = useGoogleAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.subtitle}>
          You can login with the service of your preference!!!
        </Text>
      </View>
      <View style={styles.content}>
        <GoogleSigninButton
          style={styles.button}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => googleAuth()}
        />
      </View>
    </View>
  );
};

export default Login;
