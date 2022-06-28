
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {

    pokemon?: object;

}

const winWidth = Dimensions.get('window').width;

export default function Card({ pokemon, navigation }: Props) {

    const{name, image} = pokemon;

    return (
        <>

            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('PokemonScreen', { pokemon: pokemon})}
            >
                <LinearGradient colors={['#5097da', '#a5eaf7']} style={styles.cardContainer} >

                    <View style={styles.content} >

                        <Text style={styles.name} >{name}</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: image }}
                        />



                    </View>


                </LinearGradient>

            </TouchableOpacity>




            {/* 
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.cardContainer}
            >

                <View style={styles.content} >

                    <Text style={styles.name} >{pokemon.name}</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: pokemon.image }}
                    />



                </View>


            </TouchableOpacity> */}


        </>
    );
}

const styles = StyleSheet.create({

    cardContainer: {

        padding: 6,
        // backgroundColor: '#34B3F1',
        marginHorizontal: 6,
        height: 120,
        width: winWidth * 0.45,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },

    content: {

        flexDirection: 'row',


    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'


    },
    image: {

        position: 'absolute',
        left: 75,
        top: 5,
        height: 85,
        width: 85,
        resizeMode: 'cover',

    },

});
