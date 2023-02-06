import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonPress } from '../components';
import global from '../config/global';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.layout}>
            <View style={styles.splashImage}>
                {/*  <Image source={require('../assets/image/splashback.png')} resizeMode="cover" /> */}
            </View>
            {/* <ImageBackground source={require('../assets/image/splashback.png')} resizeMode="cover" style={styles.image}>
            </ImageBackground> */}

            <View style={styles.actionpart}>

                <View style={styles.textsView}>
                    <Text style={styles.glocery}>Grocery Delivery</Text>
                    <Text style={styles.door}>at your door</Text>
                    <Text style={styles.subtext} numberOfLines={2}>order grocery from anywhere and get delivery at your door
                    </Text>
                </View>
                <ButtonPress title={'Get Started'} navigation={navigation} page={'signin'} />
            </View>
        </View>
    )
}

export default WelcomeScreen;

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        //flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
        width: 284,
        height: 40,
        top: 0
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    splashImage: {
        position: 'absolute',
        width: 419,
        height: 844,
        left: -23,
        top: 0,
        backgroundColor: global.black
    },
    actionpart: {
        position: 'absolute',
        width: 317,
        height: 300,
        left: 10,
        top: 350,
        //padding: 20
    },
    textsView: {
        padding: 9
    },
    glocery: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 39,
        textAlign: 'center',
        lineHeight: 28,
        color: '#E5E5E5',
        paddingTop: 28
    },
    door: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 36,
        textAlign: 'center',
        color: '#E5E5E5',
        lineHeight: 28,
        paddingTop: 10,
        opacity: 0.9,
    },
    subtext: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        textAlign: 'center',
        color: '#E5E5E5',
        lineHeight: 20,
        opacity: 0.7,
        padding: 15
    }
});
