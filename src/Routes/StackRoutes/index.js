import React, {useState}from 'react';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

export default function StackRoutes() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name='SignUp' component={SignUp}
            options={{
                title:"",
                headerTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: '#121214',
                }
            }}
            />
        </Stack.Navigator>
    );
}