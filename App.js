import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { ButtonPress } from './app/components';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="underline text-2xl">Open up App.js to start working on your app!</Text>
      <ButtonPress />
      <StatusBar style="auto" />
    </View>
  );
}
