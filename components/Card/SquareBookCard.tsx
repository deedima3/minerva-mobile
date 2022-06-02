import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlightBase,
  TouchableHighlight,
} from "react-native";

const LandscapeBookCard = ({id, title, author, imageLink, navigate} : LandscapeBookCardProps) => {

  const onClick = () => {
    navigate("BookDetail", {id: id})
  }
  
  return (
    <TouchableHighlight underlayColor="#1A1D27" onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.overlayView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{author}</Text>
        </View>
        <View style={styles.overlayViewDarken}/>
        <TouchableHighlight>
          <Image
            source={{ uri: imageLink }}
            style={styles.image}
          />
        </TouchableHighlight>
      </View>
    </TouchableHighlight>
  );
};

export interface LandscapeBookCardProps {
  id : number;
  navigate : any;
  imageLink : string;
  title : string;
  author : string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 150,
    maxHeight: 150,
    maxWidth : 150,
    position: "relative",
    borderRadius : 6,
    overflow : "hidden",
    marginLeft : 10
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlayView: {
    position: "absolute",
    zIndex: 50,
    width: 150,
    height: 150,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  subtitle : {
    fontSize: 10,
    fontWeight: "200",
    color: "white",
  },
  overlayViewDarken : {
    position: "absolute",
    zIndex: 40,
    width: 220,
    height: 130,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor : "rgba(0,0,0,0.2)"
  }
});

export default LandscapeBookCard;
