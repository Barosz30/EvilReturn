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
  }

  const values = {
    money,
    setMoney,
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SingleUnitBar incomeSource={goblin} values={values}/>

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
});


