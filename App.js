import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from './components';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="underline">Open up App.js to start working on your app!</Text>
      <Button />
      <StatusBar style="auto" />
    </View>
  );
}
