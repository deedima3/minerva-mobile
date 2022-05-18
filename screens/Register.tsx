import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import SquareBookCard from "../components/Card/SquareBookCard";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import minerva from "../assets/images/minerva.png";
import RoundedButton from "../components/Button/RoundedButton";
import PressableText from "../components/Button/PressableText";

const Register = ({ navigation }: any) => {
  const schema = yup.object({
    username: yup.string().required("Username wajib diisi"),
    password: yup.string().required("Password wajib diisi"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Image source={minerva} style={styles.image} />
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitlewhite}>
        Daftar Akun jika belum mempunyai akun
      </Text>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email*</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="deedima@gmail.com"
              />
            )}
            name="email"
            rules={{ required: true }}
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
        </View>
        <View>
          <Text style={styles.label}>Password*</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="shelovecat3"
              />
            )}
            name="password"
            rules={{ required: true }}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
        </View>
        <View>
          <RoundedButton
            onPress={() => navigation.navigate("Root")}
            text={"Masuk"}
          />
          <PressableText
            onPress={() => navigation.navigate("Root")}
            text={"Sudah Punya akun?"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#58F9C8",
    marginTop: 40,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 100,
    height: 50,
  },
  subtitlewhite: {
    fontSize: 14,
    fontWeight: "100",
    marginTop: 10,
    color: "#FFFFFF",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  form: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxHeight: 250,
    marginTop: 50,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    height: 40,
    minWidth: "100%",
    padding: 10,
    borderRadius: 10,
    color: "#000000",
    marginTop: 10,
  },
  error: {
    color: "red",
    fontSize: 14,
  },
});

export default Register;
