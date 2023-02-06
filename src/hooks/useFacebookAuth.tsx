import {useCallback} from 'react';
import {facebookSignInService} from '../services/facebookAuth';

export default () =>
  useCallback(async () => {
    try {
      const facebookAuth = await facebookSignInService();
      return facebookAuth;
    } catch (error) {
      console.log(error);
    }
  }, []);
