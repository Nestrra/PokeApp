

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {

    title: string;
    onPress: ()=>void;
}


export const Button = ( {title, onPress}: Props) => {
    console.log(title)
    return (
        <View style={{ alignItems: 'center' }} >
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}
                style={styles.container} >

                <Text style={styles.text}>{title}</Text>

            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        marginTop: 10,
        padding: 8,
        backgroundColor: '#F15412',
        width: 300,
        borderRadius: 10,

    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },

});

