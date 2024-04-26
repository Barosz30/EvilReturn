import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SingleUnitBar({ incomeSource, values }) {
    return (
        <View style={[outerView.container, { backgroundColor: incomeSource.backgroundColor }]}>
            <View>
                <Image source={incomeSource.imageSrc} style={styles.image} />
            </View>
            <View style={styles.nameAndBarContainer}>
                    <Text style={styles.newText}>{incomeSource.name}</Text>
                    <View style={styles.progressBackground} />
            
                {/* <TouchableOpacity>
                    
                </TouchableOpacity> */}
            </View>
        </View>
    );
}


const outerView = StyleSheet.create({
    container: {
        width: "90%",
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        backgroundColor: 'green',
        borderRadius: 20,
    },
});

const styles = StyleSheet.create({
    nameAndBarContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    newText: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 10,
        margin: 10,
    },
    progressBackground: {
        backgroundColor: 'gray',
        flex: 1,
        marginVertical: 10,
        width: '90%',
        borderRadius: 10,
    }
});
