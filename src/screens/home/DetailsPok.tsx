import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PokemonDetails } from '../../interfaces/pokemonInterfaces';


interface Props {

    pokemon: PokemonDetails

}



export const DetailsPok = ({ pokemon }: Props) => {

    const { abilities, base_experience, stats, height, weight } = pokemon
    console.log('POKEMON DETALLES: ,', pokemon);

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Details</Text>
            <View style={styles.abilities} >
                <Text style={styles.abilitiesTitle} >Abilities:</Text>
                {
                    abilities.map((abilitie) => {
                        return <Text key={abilitie.ability.name} >  {abilitie.ability.name},  </Text>
                    })
                }

            </View>
            <View style={styles.abilities} >
                <Text style={styles.abilitiesTitle} >Base experience:</Text>
                <Text> {base_experience}</Text>
            </View>
            <View style={styles.abilities} >
                <Text style={styles.abilitiesTitle} >height:</Text>
                <Text> {height}</Text>
            </View>
            <View style={styles.abilities} >
                <Text style={styles.abilitiesTitle} >weight:</Text>
                <Text> {weight}</Text>
            </View>
            <View style={styles.stat} >
                <Text style={styles.statTitle} >Stats</Text>

                {
                    stats.map((sts: any) => {

                        return <View key={sts.stat.name} style={{ flexDirection: 'row', marginTop: 6, justifyContent:'space-between', paddingRight:60 }} >

                            <Text style={styles.abilitiesTitle}> {sts.stat.name}:</Text>

                            <View style={{ marginLeft: 125,  }} >
                                <Text  >{sts.base_stat} </Text>
                            </View>
                        </View>
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 13,
        marginTop: 50


    },
    title: {
        marginBottom:16,
        fontSize: 21,
        color: 'black',
        fontWeight: '800',
    },
    abilitiesTitle: {
        color: 'black',
        fontWeight: 'bold',
    },
    abilities: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',

    },
    stat: {
        flexDirection: 'column',
    },
    statTitle: {
        marginBottom:16,
        textAlign: 'center',
        fontSize: 21,
        color: 'black',
        fontWeight: 'bold',

    },


});
