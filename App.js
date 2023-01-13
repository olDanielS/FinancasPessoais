import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/Routes/Route';

import AuthProvider from './src/Contexts';

export default function App() {
  return (  
    <AuthProvider>
      <Routes/>  
    </AuthProvider>
  );
}
