import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
      <Text> Metabolic Map </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  }
})