import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SingleUnitBar from '../src/components/singleUnitBar/SingleUnitBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
const goblin1 = require('../src/images/goblin.jpg');

export default function Index() {
  const [money, setMoney] = useState(0);
  const goblin = {
    imageSrc: goblin1,
    backgroundColor: "green",
    name: "Goblins",
    income: 10,
    upgradeCost: 30,
    upgradeMultiplier: 2,
    upgradeLevel: 1,
    upgradeCostMultiplier: 1.3,
    speed: 300,
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.moneyContainer}>
        <Text style={styles.moneyText}>{money}</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SingleUnitBar incomeSource={goblin} money={money} setMoney={setMoney}/>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  safeArea: {
    flex: 1,
  },
  moneyContainer: {
    padding: 16,
    alignItems: 'center',
  },
  moneyText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
