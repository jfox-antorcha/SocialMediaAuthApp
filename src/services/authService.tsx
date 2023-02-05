import auth from '@react-native-firebase/auth';

export const authState = (callback: (user: any) => void) =>
  auth().onAuthStateChanged(callback);

export const authSignIn = async (credentials: any) =>
  await auth().signInWithCredential(credentials);

export const authSignOut = async () => await auth().signOut();
