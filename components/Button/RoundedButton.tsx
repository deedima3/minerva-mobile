import React from 'react'
import { Button, Pressable, StyleSheet, View, Text, TouchableHighlight } from 'react-native'

interface Props {
    onPress: () => void
    text: string
}

const RoundedButton = ({text, onPress} : Props) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.margin}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
  button : {
    backgroundColor: '#58F9C8',
    borderColor: '#FFFFFF',
    maxHeight : 50,
    minWidth: '100%',
    color : '#000000',
    borderRadius : 18,
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text : {
    fontSize: 18,
    fontWeight : 'bold',
    color : '#1A1D27',
  }
});


export default RoundedButton