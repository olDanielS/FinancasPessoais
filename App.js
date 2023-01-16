import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/Routes/Route';

import AuthProvider from './src/Contexts/Auth';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (  
    <AuthProvider>
      <StatusBar style='light'/>
      <Routes/>  
    </AuthProvider>
  );
}
