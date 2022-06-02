import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import bookApi from "../api/book/bookApi";
import CategoryButton from "../components/Card/CategoryButton";
import LandscapeBookCard from "../components/Card/LandscapeBookCard";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { BookDetail } from "../interfaces/book.interface";
import { randomArrayShuffle } from "../shared/randomizeArray";
import useUserStore from "../stores/userStore";
import { RootTabScreenProps } from "../types";

export default function Explore({
  navigation,
}: RootTabScreenProps<"Collection">) {
  const data = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      imageLink:
        "https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg",
      navigation: "",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      imageLink:
        "https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg",
      navigation: "",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      imageLink:
        "https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg",
      navigation: "",
    },
  ];

  const categoryData = [
    "Fiction",
    "Non-Fiction",
    "Fantasy",
    "Romance",
    "Mystery",
    "Isekai",
    "Hentai",
  ];

  const [bookData, setBookData] = React.useState<BookDetail[]>(null!);
  const user = useUserStore((state) => state.user);

  const fetchData = async () => {
    let fetched = await bookApi.getAllBook(user!);
    let randomized = randomArrayShuffle(fetched);
    setBookData(randomized);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.title}>Buku Terbaru</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {bookData && bookData.map((item, index) => {
            return (
              <LandscapeBookCard
                navigate={navigation.navigate}
                imageLink={item.Image}
                title={item.JudulSeri}
                author={item.Penerbit}
                key={index} id={item.ID}              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.section2}>
        <Text style={styles.title}>Kategori</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {categoryData.map((place, index) => {
            return <CategoryButton navigate={""} category={place} key={index} />;
          })}
        </ScrollView>
      </View>
      <View style={styles.section3}>
        <Text style={styles.title}>Buku Terbaik</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
        {bookData && bookData.map((item, index) => {
            return (
              <LandscapeBookCard
                navigate={navigation.navigate}
                imageLink={item.Image}
                title={item.JudulSeri}
                author={item.Penerbit}
                key={index} id={item.ID}             />
            );
          })}
        </ScrollView>
        <Text style={styles.title}>Horror Terbaik</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
        {bookData && bookData.map((item, index) => {
            return (
              <LandscapeBookCard
                navigate={navigation.navigate}
                imageLink={item.Image}
                title={item.JudulSeri}
                author={item.Penerbit}
                key={index} id={item.ID}              />
            );
          })}
        </ScrollView>
        <Text style={styles.title}>Buku Ambismu</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
        {bookData && bookData.map((item, index) => {
            return (
              <LandscapeBookCard
                navigate={navigation.navigate}
                imageLink={item.Image}
                title={item.JudulSeri}
                author={item.Penerbit}
                key={index} id={item.ID}             />
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1D27",
    paddingLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    marginLeft: 10,
    marginTop: 20,
  },
  section1: {
    marginTop: -20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  scrollView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  section3: {
    marginTop: 20,
  },
  section2: {
    marginTop: 10,
  },
});
