import { StatusBar } from 'expo-status-bar';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { StyleSheet, Text, View } from 'react-native';
import SingleUnitBar from '../components/singleUnitBar/SingleUnitBar';
const goblin1 = require('../images/goblin.jpg');

export default function Index() {
  const goblin = {
    imageSrc: goblin1,
    backgroundColor: "green",
    name: "Goblins",
  }

  return (
    <View style={styles.container}>
      <SingleUnitBar incomeSource={goblin} />
      {/* <SingleUnitBar backgroundColor="green" />
      <SingleUnitBar backgroundColor="red" /> */}
      <Text>To jest mój plik startowy. Będzie tu jakiś store provider, czy coś</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(Index);
