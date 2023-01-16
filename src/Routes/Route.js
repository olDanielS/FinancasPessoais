import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthContext } from '../Contexts/Auth';
import StackRoutes from './StackRoutes';
import DrawerRoutes from './DrawerRoutes';
import { ActivityIndicator, View } from 'react-native';

export default function Routes() {
  const {signed, loadingAuth} = useContext(AuthContext)
  if(loadingAuth){
    return (
      <View style={{backgroundColor: "#121214",flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color="#FFF"/>
      </View>
    )   
  }
  
 return (

   <NavigationContainer>
      {signed ? < DrawerRoutes/> : <StackRoutes/>} 
   </NavigationContainer>
  );
}