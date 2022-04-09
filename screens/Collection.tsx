import React from "react";
import { StyleSheet } from "react-native";
import SquareBookCard from "../components/Card/SquareBookCard";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function Collection({
  navigation,
}: RootTabScreenProps<"Collection">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/Collection.tsx" />
      <SquareBookCard
        navigate={"/screens/Detail"}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={"IDKF"}
        author={"Jeremi"}
        key={"a"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
