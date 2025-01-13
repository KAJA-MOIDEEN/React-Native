import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View,FlatList } from 'react-native';

export default function App() {
  const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','N','O','P']
  const letterMap = letters.map((Value,index)=>({letterText:Value,key:index}))
  return (
    <View style={styles.container}>
      <Text>Hi Developers</Text>
      <FlatList
      data={letterMap}
      renderItem={(letter)=><Text style={styles.text}>{letter.item.letterText}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width:"100%",
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 90,
    padding:20,

  }
});
