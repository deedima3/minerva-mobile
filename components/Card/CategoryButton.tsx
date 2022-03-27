import React from 'react'
import { Button, Text, StyleSheet, useColorScheme, View, Pressable } from 'react-native'
import Colors from '../../constants/Colors';

const CategoryButton = ({category, navigate} : CategoryButtonProps) => {
    const onClick = () => {}

  return (
    <Pressable onPress={onClick} style={styles.pressable}>
        <Text style={styles.text}>{category}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressable: {
        borderColor : Colors["dark"].tint,
        borderWidth : 2, 
        borderRadius : 15,
        maxHeight : 40,
        paddingVertical : 7,
        paddingHorizontal : 15,
        marginLeft : 10
    },
    text: {
        color : Colors["dark"].tint,
        fontSize : 12,
    }
})

export interface CategoryButtonProps{
    navigate : string;
    category : string;
}

export default CategoryButton