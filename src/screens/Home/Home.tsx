import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import useAuthState from '../../hooks/useAuthState';
import styles from './styles';

const Home = () => {
  const {user, signOut} = useAuthState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>User Logged!!!</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{uri: user?.photoURL}}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.title}>{user?.displayName || ''}</Text>
        <Text style={styles.subtitle}>{user?.email || ''}</Text>
        <TouchableOpacity style={styles.button} onPress={signOut}>
          <Text style={styles.subtitle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
