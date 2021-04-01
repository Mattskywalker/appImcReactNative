import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Hello Word</Text>
      <Text>React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  title:{
    fontSize:28,
    color: 'green',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
