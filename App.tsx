import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src/screens/auth/AuthStack';
import {  ApolloProvider } from '@apollo/client';
import { client } from './src/api/apiClient';








const App = () => {



  return (
     <ApolloProvider client={client}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
     </ApolloProvider>

  );
};

export default App;
