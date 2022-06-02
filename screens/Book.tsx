import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import EditScreenInfo from "../components/EditScreenInfo";
import bookApi from "../api/book/bookApi";
import { BookDetail, KategoriBuku } from "../interfaces/book.interface";
import useUserStore from "../stores/userStore";
import CategoryButton from "../components/Card/CategoryButton";
import CustomButton from "../components/Card/CustomButton";

const Book = ({ route, navigation }: any) => {
  const { id } = route.params;
  const [book, setBook] = useState<BookDetail | null>(null);

  const user = useUserStore((state) => state.user);

  const fetchData = async () => {
      console.log(id)
    let data = await bookApi.getDetailBook(id, user!);
    setBook(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {book && <Image style={styles.image} source={{ uri: book.Image }} />}
      <View style={styles.detailsContainer}>
        <View style={styles.card}>
          <View>
            <Image style={styles.leftImage} source={{ uri: book?.Image }} />
          </View>
          <View style={styles.rightFlex}>
            <Text style={styles.title}>{book?.Title}</Text>
            <Text style={styles.author}>{book?.Penerbit}</Text>
            <View style={{marginTop : 30}}>
                <CustomButton text={"Pinjam"} onClick={() => {}}/>
            </View>
          </View>
        </View>
        <View style={styles.sinopsisCard}>
          <Text style={styles.title}>Sinopsis</Text>
          <Text style={styles.author}>{book?.Deskripsi}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    sinopsisCard : {
        flex : 1,
        paddingHorizontal : 40,
        marginTop : 20,
        justifyContent : "flex-start",
        alignItems : "flex-start",
    },
  rightFlex: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  leftImage: {
    width: 150,
    height: 150,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1A1D27",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  author: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#fff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: "100%",
    height: 500,
    opacity: 0.2,
  },
  detailsContainer: {
    position: "absolute",
    marginTop: 70,
  },
});

export default Book;
