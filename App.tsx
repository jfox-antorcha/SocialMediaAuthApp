import React from 'react'
import { ActivityIndicator } from 'react-native'
import useAuth from './src/hooks/useAuthState'
import Home from './src/screens/Home/Home'
import Login from './src/screens/Login/Login'

const App = () => {
  const {isInitializing, user} = useAuth()

  if(isInitializing) return <ActivityIndicator size='large' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>

  return (
    <>
      {user ? <Home /> : <Login />}
    </>
  )
}

export default App