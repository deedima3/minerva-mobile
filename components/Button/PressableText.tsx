import React from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";

interface Props {
  onPress: () => void;
  text: string;
}

const PressableText = ({ text, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.margin}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#58F9C8",
  },
  margin: {
    marginTop: 10,
  },
});

export default PressableText;
