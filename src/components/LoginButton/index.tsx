import React, {useMemo} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {apple, facebook, google} from '../../constants/icons';
import styles from './styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
  brand: Brand;
  onPress: () => void;
}

type Brand = 'apple' | 'facebook' | 'google';

const LoginButton = ({children, onPress, brand}: Props) => {
  const brandSource = useMemo(() => {
    switch (brand) {
      case 'apple':
        return apple;

      case 'facebook':
        return facebook;

      case 'google':
        return google;
    }
  }, [brand]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <Image source={brandSource} style={styles.icon} resizeMode="contain" />
      {children || null}
    </TouchableOpacity>
  );
};

export default LoginButton;
