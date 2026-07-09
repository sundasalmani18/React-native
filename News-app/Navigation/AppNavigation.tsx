import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../src/component/WelcomeScreen";
import SignUpScreen from "../src/component/SignupScreen";
import LoginScreen from "../src/component/LoginScreen";
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import NewsScreen from '../src/component/NewsScreen';
const Stack = createNativeStackNavigator();



const AppNavigation = () => {

  const { user, loading } = useContext(AuthContext)!;
  return (
    <Stack.Navigator>

      {user ? (
        <>
          <Stack.Screen
            name="Newsscreen"
            component={NewsScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
          />
        </>
      )}
    </Stack.Navigator>

  )
}

export default AppNavigation