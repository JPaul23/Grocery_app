import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonPress } from './app/components';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justyContent: 'center',
      alignItems: 'center',
      padding: 30
    }}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={{
        flex: 0.5
      }}>
        <WelcomeScreen />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
