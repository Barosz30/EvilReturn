import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SingleUnitBar({ incomeSource }) {
    return (
        <View style={[outerView.container, { backgroundColor: incomeSource.backgroundColor }]}>
            <View>
                <Image source={incomeSource.imageSrc} style={styles.image} />
            </View>
            <View>
                <Text style={styles.newText}>{incomeSource.name}</Text>
                <Text>Try editing me! 🎉</Text>
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
    newText: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 10,
        margin: 10,
    },
});