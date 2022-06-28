/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import { PokemonScreen } from './PokemonScreen';



const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator

            screenOptions={{

                headerShown: false,
                cardStyle: {
                    backgroundColor: '#EFEFEF',
                },
            }}

        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
             <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
};




