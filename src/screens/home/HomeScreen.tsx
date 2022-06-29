/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useApi } from '../../hooks/useApi';
import Card from './../../components/Card';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {}

export default function HomeScreen({navigation, route}:Props) {

 const { pokemonsList, loading} = useApi();


 
  return (
    <>
      {   loading ? <Text>Loading.....</Text> :
        <View style={{ alignItems: 'center' }}  >
          <FlatList
            ListHeaderComponent={(
              <Text style={{ fontSize: 32, fontWeight: '800', marginBottom: 10 }}  >PokeApp</Text>
            )}
            showsVerticalScrollIndicator={false}
            data={pokemonsList}
            numColumns={2}
            renderItem={({ item }) => (<Card pokemon={item} navigation={navigation} route={route} />)}
            
          />
        </View>

      }
    </>
  );
}
