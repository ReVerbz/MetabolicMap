import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title = 'MAPA METABÓLICO' }: NavbarProps) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'black',
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: '500',
  },
});
