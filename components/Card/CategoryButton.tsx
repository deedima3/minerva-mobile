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

const CategoryButton = ({ category, navigate }: CategoryButtonProps) => {
  var [isPress, setIsPress] = React.useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: "#58F9C8",
    style: isPress ? styles.pressed : styles.pressable,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log(category),
  };

  const textStyle = isPress ? styles.textpressed : styles.text

  return (
    <TouchableHighlight {...touchProps}>
      <Text style={textStyle}>{category}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  textpressed: {
    color: "#1A1D27",
    fontWeight : "bold"
  },
  pressable: {
    borderColor: Colors["dark"].tint,
    borderWidth: 2,
    borderRadius: 15,
    maxHeight: 40,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  pressed: {
    backgroundColor: Colors["dark"].tint,
    color: "#ffffff",
    borderRadius: 15,
    maxHeight: 40,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  text: {
    color: Colors["dark"].tint,
    fontSize: 12,
  },
});

export interface CategoryButtonProps {
  navigate: string;
  category: string;
}

export default CategoryButton;
