import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightBase,
  Image,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import minerva from "../assets/images/minerva.png";
import { Entypo } from "@expo/vector-icons";

export default function Explore({
  navigation,
}: RootTabScreenProps<"Collection">) {

  const onPress = () => {
    console.log("Pressed");
  }
  return (
    <View style={styles.container}>
      <Image source={minerva} style={styles.image} />
      <Text style={styles.title}>Minerva</Text>
      <Text style={styles.subtitle}>Library Management System</Text>
      <Text style={styles.subtitle}>Version 69.420</Text>
      <View style={styles.menucontainer}>
        <TouchableHighlight style={styles.touchmenus} underlayColor="#1A1D27" onPress={onPress}>
        <View style={styles.menus}>
        <View style={styles.logocontainer}>
        <Entypo name="bookmark" size={36} color={"#ffffff"} />
        </View>
          <View style={styles.menusub}>
            <Text style={styles.titlewhite}>Kategori</Text>
            <Text style={styles.subtitlewhite}>Buat kategorimu sendiri</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchmenus} underlayColor="#1A1D27" onPress={onPress}>
        <View style={styles.menus}>
        <View style={styles.logocontainer}>
        <Entypo name="info" size={36} color={"#ffffff"} />
        </View>
          <View style={styles.menusub}>
            <Text style={styles.titlewhite}>Info</Text>
            <Text style={styles.subtitlewhite}>Tentang minerva</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchmenus} underlayColor="#1A1D27" onPress={onPress}>
        <View style={styles.menus}>
        <View style={styles.logocontainer}>
        <Entypo name="help" size={36} color={"#ffffff"} />
        </View>
          <View style={styles.menusub}>
            <Text style={styles.titlewhite}>Help</Text>
            <Text style={styles.subtitlewhite}>Bantuan menggunakan aplikasi minerva</Text>
          </View>
        </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logocontainer : {
    flex : 1,
  },
  touchmenus : {
    justifyContent: "center",
    alignItems: "center",
    height : 80,
    width : "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "#58F9C8",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "100",
    marginTop: 10,
    color: "#58F9C8",
  },
  titlewhite: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitlewhite: {
    fontSize: 14,
    fontWeight: "100",
    marginTop: 10,
    color: "#FFFFFF",
  },
  image: {
    width: 100,
    height: 50,
  },
  menus: {
    flex: 1,
    flexDirection : "row",
    justifyContent: "center",
    alignItems: "center",
    height : 80
  },
  menusub: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center",
  },
  menucontainer: {
    flex: 1,
    width : "100%",
    flexDirection: "column",
    paddingHorizontal: 15,
    marginTop: 20,
  },
});
