

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import { HomeStack } from './../home/HomeStack';



const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{

                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}

        >
            
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeStack" component={HomeStack} />

        </Stack.Navigator>
    );
};
