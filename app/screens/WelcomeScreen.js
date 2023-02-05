import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonPress } from '../components';
import global from '../config/global';

const WelcomeScreen = () => {
    return (
        <View style={styles.layout}>
            <View style={styles.splashImage}>
                {/*  <Image source={require('../assets/image/splashback.png')} resizeMode="cover" /> */}
            </View>
            <View style={styles.actionpart}>

                <View style={styles.textsView}>
                    <Text style={styles.glocery}>Grocery Delivery</Text>
                    <Text style={styles.door}>at your door</Text>
                    <Text style={styles.subtext}>order grocery from anywhere and get delivery at your door
                    </Text>
                </View>
                <ButtonPress title={'Get Started'} />
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
        height: 118,
        left: 10,
        top: 300,
    },
    textsView: {
        position: 'absolute',
        width: 317,
        height: 118,
        left: 36,
        top: 300,
    },
    glocery: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 39,
        textAlign: 'center',
        lineHeight: 28,
        color: '#E5E5E5',
    },
    door: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 36,
        textAlign: 'center',
        color: '#E5E5E5',
        lineHeight: 28,
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
    }
});
