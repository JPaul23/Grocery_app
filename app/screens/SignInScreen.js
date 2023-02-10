import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import global from '../config/global';

const SignInScreen = () => {
    return (
        <View style={styles.layout}>
            <StatusBar animated={true} hidden={false} />
            <View style={styles.header}>
                <Octicons name="arrow-left" size={25} color={global.logoColor} />
                <View style={styles.logoSection}>
                    <Image source={require('../assets/image/logo.png')} resizeMode="center" />
                </View>

            </View>
            <View>
                <Text>Image</Text>
            </View>
            <View>
                <Text>Sign in</Text>
            </View>
            <View>
                <Text>Inputs</Text>
            </View>
            <View>
                <Text>Forget password?</Text>
            </View>
            <View>
                <Text>Sign in button</Text>
            </View>
            <View>
                <Text>Login with google</Text>
            </View>
            <View>
                <Text>Don’t have an account ? Sign up</Text>
            </View>
        </View>
    );
};

export default SignInScreen;

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        //flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //height: 844,
        //left: 430,
        top: 0,
        background: global.white,
        borderRadius: global.buttonRadius,
    },
    header: {
        flexDirection: 'column',
        width: 300,
        height: 231.82,
        left: global.left,
        bottom: 80,
    },
    logoSection: {
        width: 262,
        height: 178,
        left: 5,
        right: 30,
        //top: 70,
        //backgroundColor: global.logoColor,
    }
});
