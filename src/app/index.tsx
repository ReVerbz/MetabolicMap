import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>  
        <Text style={styles.title}> MAPA METABÓLICO </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#001550',
    flexDirection: 'column',
    height: '100%'
  },
  navbar: {
    backgroundColor: 'black',
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
})