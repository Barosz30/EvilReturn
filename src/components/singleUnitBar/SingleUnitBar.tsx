import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SingleUnitBar({ incomeSource, money, setMoney }) {
    const [progress, setProgress] = useState(0);
    const [isProgressing, setIsProgressing] = useState(false);
    const intervalRef = useRef(null);
    const [income, setIncome] = useState(incomeSource.income);
    const [upgradeLevel, setUpgradeLevel] = useState(incomeSource.upgradeLevel);
    const [upgradeCost, setUpgradeCost] = useState(incomeSource.upgradeCost);
    const [upgradeCostMultiplier] = useState(incomeSource.upgradeCostMultiplier);

    useEffect(() => {
        if (isProgressing) {
            intervalRef.current = setInterval(() => {
                setProgress(prevProgress => {
                    if (prevProgress >= 100) {
                        clearInterval(intervalRef.current);
                        setIsProgressing(false);
                        setMoney(money + income * upgradeLevel);
                        return 0;
                    }
                    return prevProgress + (incomeSource.speed / 1000);
                });
            }, 10); // Update every 0.01 second
        }

        return () => clearInterval(intervalRef.current);
    }, [isProgressing, incomeSource, income, upgradeLevel]);

    const startProgress = () => {
        if (!isProgressing) {
            setIsProgressing(true);
        }
    };

    const upgrade = () => {
        if (money >= upgradeCost) {
            setMoney(money - upgradeCost);
            setUpgradeLevel(upgradeLevel + 1);
            setUpgradeCost(Math.round(upgradeCost * upgradeCostMultiplier));
        }
    };

    const canUpgrade = money >= upgradeCost;

    return (
        <View style={[outerView.container, { backgroundColor: incomeSource.backgroundColor }]}>
            <Image source={incomeSource.imageSrc} style={styles.image} />
            <View style={styles.nameAndBarContainer}>
                <Text style={styles.newText}>{incomeSource.name}</Text>
                <TouchableOpacity style={styles.progressContainer} onPress={startProgress}>
                    <View style={styles.absoluteTextContainer}>
                        <Text style={styles.buttonText}>{income * upgradeLevel}</Text>
                    </View>
                    <View style={[styles.progressBar, { width: `${progress}%` }]} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={[
                    styles.upgradeButton,
                    { backgroundColor: canUpgrade ? 'blue' : 'gray' },
                ]}
                onPress={upgrade}
                disabled={!canUpgrade}
            >
                <Text style={styles.buttonText}>Upgrade</Text>
                <Text style={styles.buttonText}>{upgradeCost}</Text>
            </TouchableOpacity>
        </View>
    );
}

const outerView = StyleSheet.create({
    container: {
        width: "95%",
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        borderRadius: 20,
    },
});

const styles = StyleSheet.create({
    nameAndBarContainer: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
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
        marginRight: 0,
    },
    progressContainer: {
        borderColor: 'gray',
        backgroundColor: 'gray',
        borderWidth: 2,
        flex: 1,
        marginVertical: 10,
        width: '90%',
        borderRadius: 10,
        position: 'relative',
        justifyContent: 'center',
    },
    progressBar: {
        backgroundColor: 'purple',
        height: '100%',
        width: 0,
        borderRadius: 10,
    },
    upgradeButton: {
        flex: 1,
        height: "80%",
        borderRadius: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    absoluteTextContainer: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
