import React from 'react';
import {View, Text} from 'react-native';
import LoginButton from '../../components/LoginButton';
import useAppleAuth from '../../hooks/useAppleAuth';
import useFacebookAuth from '../../hooks/useFacebookAuth';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import styles from './styles';

const Login = () => {
  const appleAuth = useAppleAuth();
  const googleAuth = useGoogleAuth();
  const facebookAuth = useFacebookAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.subtitle}>
          You can login with the service of your preference!!!
        </Text>
      </View>
      <View style={styles.content}>
        <LoginButton brand="google" onPress={() => googleAuth()} />
        <LoginButton brand="apple" onPress={() => appleAuth()} />
        <LoginButton brand="facebook" onPress={() => facebookAuth()} />
      </View>
    </View>
  );
};

export default Login;
