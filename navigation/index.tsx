/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "../components/Themed";
import Explore from "../screens/Explore";
import Collection from "../screens/Collection";
import Other from "../screens/Other";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Book from "../screens/Book";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Root"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainMenu"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="Search" component={ModalScreen} />
        <Stack.Screen name="Filter" component={ModalScreen} />
        <Stack.Screen name="BookDetail" component={Book} />
        <Stack.Screen name="CreateCategory" component={ModalScreen} />
        <Stack.Screen name="Info" component={ModalScreen} />
        <Stack.Screen name="Help" component={ModalScreen} />
        <Stack.Screen name="EditProfile" component={ModalScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ headerShown: false, presentation: "transparentModal" }}>
        <Stack.Screen name="Loading" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Collection"
        component={Collection}
        options={({ navigation }: RootTabScreenProps<"Collection">) => ({
          title: "Collection",
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
            height: 80,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="book" size={24} color={color} />
          ),
          headerLeft: () => (
            <View style={styles.containerLeft}>
              <AntDesign
                name="book"
                size={35}
                color={Colors[colorScheme].tint}
              />
            </View>
          ),
          headerRight: () => (
            <View style={styles.container}>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <AntDesign
                  name="search1"
                  size={24}
                  color={Colors[colorScheme].tint}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <AntDesign
                  name="filter"
                  size={24}
                  color={Colors[colorScheme].tint}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Image
                  style={styles.profile}
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
                  }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="Explore"
        component={Explore}
        options={({ navigation }: RootTabScreenProps<"Explore">) => ({
          title: "Explore",
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
            height: 80,
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="compass" size={24} color={color} />
          ),
          headerLeft: () => (
            <View style={styles.containerLeft}>
              <Entypo
                name="compass"
                size={35}
                color={Colors[colorScheme].tint}
              />
            </View>
          ),
          headerRight: () => (
            <View style={styles.container}>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <AntDesign
                  name="search1"
                  size={24}
                  color={Colors[colorScheme].tint}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <AntDesign
                  name="filter"
                  size={24}
                  color={Colors[colorScheme].tint}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Image
                  style={styles.profile}
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
                  }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="Other"
        component={Other}
        options={({ navigation }: RootTabScreenProps<"Other">) => ({
          title: "Other",
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
            height: 80,
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="dots-three-horizontal" size={25}
            color={color} />
          ),
          headerLeft: () => (
            <View style={styles.containerLeft}>
              <Entypo name="dots-three-horizontal" size={35}
            color={Colors[colorScheme].tint} />
            </View>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    width: 130,
    paddingRight: 10,
  },
  containerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
    paddingLeft: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
