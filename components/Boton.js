import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft, togglePointsFilter}) => {
    return ( 
        <View style={styles.boton}>
            <Button onPress={onPressLeft} title={textLeft}/>
            <Button title="Ver/Ocultar" onPress={togglePointsFilter}/>
        </View>
    )
}

const styles = StyleSheet.create({
    boton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});