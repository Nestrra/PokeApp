



import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { DetailsPok } from './DetailsPok';
import { PokemonDetails } from '../../interfaces/pokemonInterfaces';


interface Props extends StackScreenProps<any, any> {

  pokemon?: PokemonDetails

}

export const PokemonScreen = ({ route }: Props) => {


  const [loading, setLoading] = useState(true);
  const [pokemon, setpokemon] = useState<PokemonDetails>();


  useEffect(() => {
    getPokemon();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemon = async () => {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params?.pokemon.id}/`);

    setpokemon(response.data);
    setLoading(false);

  };

  return (

    <View>

      <LinearGradient colors={['#F77E21', '#e8ecf0']} style={styles.header} >
        <Text style={styles.namePok} >{route.params?.pokemon.name}</Text>

        <Image
          style={styles.imagePOk}
          source={{ uri: route.params?.pokemon.image }}
        />
      </LinearGradient>


      {
        loading ?

          <View style={styles.detailContent} >

            <ActivityIndicator
              color={'blue'}
              size={54}
            />
          </View>

          :

          <DetailsPok pokemon={pokemon!} />

      }

    </View>


  );
};

const styles = StyleSheet.create({

  header: {
    alignItems: 'center',
    height: 220,
    backgroundColor: '#557B83',
    zIndex: 999,
  },
  namePok: {
    marginTop: 23,
    fontSize: 29,
    fontWeight: '700',
    color: 'white',
  },
  imagePOk: {
    marginTop: 12,
    width: 230,
    height: 220,
  },
  detailContent: {

    flex: 1,
    marginTop: 200,


  }

});
