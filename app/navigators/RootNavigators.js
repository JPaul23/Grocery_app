import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerTitleAlign: 'center'
            }}>
            {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
            <Stack.Screen name="Welcome" component={WelcomeScreen} />

        </Stack.Navigator>
    );
};

export default RootNavigator;