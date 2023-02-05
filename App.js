import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import AccountNavigators from './app/navigators/AccountNavigators';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <AccountNavigators />
      </SafeAreaProvider>
    </NavigationContainer>

  );
};

export default App;
