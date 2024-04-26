import { registerRootComponent } from "expo";
import { Stack, Tabs } from "expo-router";
import { View } from "react-native";
export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  )
}
