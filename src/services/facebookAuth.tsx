import auth from '@react-native-firebase/auth';
import {authSignIn} from './authService';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export const facebookSignInService = async () => {
  const request = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (request.declinedPermissions || request.isCancelled)
    throw new Error('Permissions not granted!!!');
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) throw new Error('Something went wrong obtaining the token');
  const facebookCredentials = auth.FacebookAuthProvider.credential(
    data?.accessToken,
  );
  return authSignIn(facebookCredentials);
};
