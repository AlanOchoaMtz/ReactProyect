import React from 'react'
import { FlatList, Text, View, Button, StyleSheet, Dimensions} from 'react-native';

export default ({ puntos, closeModal }) => {
    return(
        <>
            <View style={styles.list}>
                <FlatList
                    data={puntos.map(x => x.name)}
                    renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View> }
                    keyExtractor={item => item}
                />
            </View>
            <View>
                <Button onPress={closeModal} title="Cerrar" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        height : Dimensions.get('window').height -250,
    },
    item: {
        borderBottomWidth: 1,
        padding: 20,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center'
    }
});