import auth from '@react-native-firebase/auth';
import {authSignIn} from './authService';
import {appleAuth} from '@invertase/react-native-apple-authentication';

export const appleSignInService = async () => {
  const request = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });
  if (!request.identityToken) throw new Error('Apple Sign-In failed');
  const {identityToken, nonce} = request;
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce,
  );
  return authSignIn(appleCredential);
};
