import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AccountNavigators = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false,
            }}>
            {/* Set up stack navigation to move between welcome screen , sign in and sign up screen here */}
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="signup" component={SignUpScreen} />
            <Stack.Screen name="signin" component={SignInScreen} />
        </Stack.Navigator>
    );
}

export default AccountNavigators;
