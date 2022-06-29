



import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { DetailsPok } from './DetailsPok';
import { PokemonDetails } from '../../interfaces/pokemonInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any, any> {

  pokemon?: PokemonDetails

}

export const PokemonScreen = ({ navigation, route }: Props) => {


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
        <View style={styles.contentNamePOk}>
          <Icon
          style={{marginLeft:15, marginRight:25}}
            name='arrow-back-outline'
            size={25}
            color='white'
            onPress={()=>navigation.goBack()}
          />
          <Text style={styles.namePok} >{route.params?.pokemon.name}</Text>
        </View>


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
  contentNamePOk: {
    flexDirection: 'row',
   
    width: '100%',
    alignItems: 'center',
    marginTop: 12
  },
  namePok: {
    marginLeft:55,
    fontSize: 29,
    fontWeight: '700',
    color: 'white',
  },
  imagePOk: {
    marginTop: 12,
    width: 210,
    height: 210,
  },
  detailContent: {

    flex: 1,
    marginTop: 200,


  }

});
