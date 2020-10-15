import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export default ({title, ...rest}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.title}>
                <Text>{title}</Text>
            </View>
            <TextInput {...rest}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 70,
    },
    title: {
        marginBottom: 10,
        justifyContent: 'center',
    }
})