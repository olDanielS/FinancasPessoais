import React from 'react';
import Home from '../../pages/Authenticated/Home';
import Profile from '../../pages/Authenticated/Profile';
import Registers from '../../pages/Authenticated/Registers';

import { createDrawerNavigator } from '@react-navigation/drawer';

export default function DrawerRoutes() {
    const Drawer = createDrawerNavigator();
return (
    <Drawer.Navigator screenOptions={{
        headerShown: false,
        drawerStyle: {
            backgroundColor: '#000',
            paddingTop: 20
        },
        drawerActiveBackgroundColor: '#694993',
        drawerActiveTintColor: '#FFFF',
        drawerInactiveBackgroundColor: '#FFF',
        drawerInactiveTintColor: '#000'

    }}>
        <Drawer.Screen name='Home' component={Home}/>  
        <Drawer.Screen name='Novo Registro' component={Registers}/>  
        <Drawer.Screen name='Profile' component={Profile}/>  
    </Drawer.Navigator>
  );
}