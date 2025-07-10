import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import TelaCriarConta from './screens/TelaCriarConta';
import GoogleLoginButton from './components/GoogleLoginButton';
import './src/firebaseConfig'; // Isso garante que o Firebase será iniciado

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Criar" component={TelaCriarConta} />
        <Stack.Screen name="GoogleLogin" component={GoogleLoginButton} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
