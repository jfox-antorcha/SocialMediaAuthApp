import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {authSignIn} from './authService';

GoogleSignin.configure({
  webClientId: '',
});

export const googleSingInService = async () => {
  const hasPlayServices = await GoogleSignin.hasPlayServices({
    showPlayServicesUpdateDialog: true,
  });

  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return authSignIn(googleCredential);
};
