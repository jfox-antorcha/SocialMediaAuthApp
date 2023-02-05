import {useEffect, useState} from 'react';
import {User} from '../interfaces/user';
import {authState, authSignOut} from '../services/authService';

export default () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const subscriber = authState(onAuthStateChange);
    return subscriber;
  }, []);

  const onAuthStateChange = (user: any) => {
    console.log(user);
    setUser(user);
    if (isInitializing) setIsInitializing(false);
  };

  const signOut = async () => await authSignOut();

  return {signOut, isInitializing, user};
};
