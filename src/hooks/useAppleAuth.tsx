import {useCallback} from 'react';
import {appleSignInService} from '../services/appleAuth';

export default () =>
  useCallback(async () => {
    try {
      const appleAuth = await appleSignInService();
      return appleAuth;
    } catch (error) {
      console.log(error);
    }
  }, []);
