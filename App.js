import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import { Map , Modal, Boton, Input, List } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto')
  const [pointsFilter, setPointsFilter] = useState(true)

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre};
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style = { styles.container }>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <Boton onPressLeft={handleLista} textLeft={'Lista'} togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_punto' 
          ?
        <View style={styles.form}>
          <Input title="Nombre" placeholder="Nombre de localización" onChangeText={handleChangeText}/>
          <Button title="Aceptar" onPress={handleSubmit}/>
        </View>
        : <List puntos={puntos} closeModal={() => setVisibility(false)}/>
        }
      </Modal>
    </View>
);}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    form: {
      padding: 15,
    }
});