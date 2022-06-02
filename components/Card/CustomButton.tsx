import React from "react";
import {
  Button,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import Colors from "../../constants/Colors";

const CustomButton = ({ text, onClick }: CategoryButtonProps) => {
  var [isPress, setIsPress] = React.useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: "#58F9C8",
    style: isPress ? styles.pressed : styles.pressable,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => onClick,
  };

  const textStyle = isPress ? styles.textpressed : styles.text

  return (
    <TouchableHighlight {...touchProps}>
      <Text style={textStyle}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: "#58F9C8",
    color: "#ffffff",
    borderRadius: 15,
    maxHeight: 40,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginLeft: 10
  },
  pressable: {
    backgroundColor: Colors["dark"].tint,
    color: "#ffffff",
    borderRadius: 15,
    maxHeight: 40,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight : "bold"
  },
  textpressed: {
    color: "#000",
    fontSize: 18,
    fontWeight : "bold"
  },
});

export interface CategoryButtonProps {
  text: string;
  onClick : () => void;
}

export default CustomButton;
