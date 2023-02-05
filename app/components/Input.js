import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import global from '../config/global';

const InputText = ({ label, onChangeInput, placeholder, value }) => {
    return (
        <View style={styles.layout}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChangeInput}
                placeholder={placeholder}
                keyboardType="ascii-capable"
                style={styles.input}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    input: {
        width: 255,
        height: 45,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: global.primaryBtnColor,
        borderRadius: global.inputRadius,
        padding: 10
    },
    layout: {
        position: 'absolute',
        flexDirection: 'column',
        width: 314,
        height: 103,
        left: global.left,
        top: 90,
    },
    label: {
        width: 55,
        height: 24,
        left: 0,
        bottom: 8,
        fontStyle: 'normal',
        fontSize: 20,
        textAlign: 'center',
        color: global.black,
        opacity: 0.5,
    }
})