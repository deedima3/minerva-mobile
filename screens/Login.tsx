import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import SquareBookCard from "../components/Card/SquareBookCard";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { useForm, Controller, SubmitErrorHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import minerva from "../assets/images/minerva.png";
import RoundedButton from "../components/Button/RoundedButton";
import PressableText from "../components/Button/PressableText";
import useUserStore from "../stores/userStore";
import CustomTextInput from "../components/Form/CustomTextInput";
import { AdminAuthApi } from "../api/auth/adminAuth";

const Login = ({ navigation }: any) => {
  
  const user = useUserStore((state) => state.user);
  const changeUser = useUserStore((state) => state.changeUser);

  if (user) {
    navigation.navigate("MainMenu");
  }

  const schema = yup.object({
    username: yup.string().required("Username wajib diisi"),
    password: yup.string().required("Password wajib diisi"),
  });

  type FormValues = {
    username: string;
    password: string;
  };

  const {
    register,
    setValue,
    handleSubmit, 
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const pushData = async (data: any) => {
    let result = await AdminAuthApi.login(data)
    changeUser(result)
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    alert(errors)
  }


  return (
    <View style={styles.container}>
      <Image source={minerva} style={styles.image} />
      <Text style={styles.title}>Masuk</Text>
      <Text style={styles.subtitlewhite}>
        Silahkan Login Untuk Menggunakan Sistem
      </Text>
      <View style={styles.form}>
        <CustomTextInput
          control={control}
          label={"Username*"}
          errors={{ errors }}
          rules={{ required: true }}
          placeholder={"deedima3"}
          name={"username"}
        />
        <CustomTextInput
          control={control}
          label={"Password*"}
          errors={{ errors }}
          rules={{ required: true }}
          placeholder={"shelovecat3"}
          name={"password"}
          />
        <View>
          <RoundedButton
            onPress={handleSubmit(pushData)}
            text={"Masuk"}
          />
          <PressableText
            onPress={() => navigation.navigate("Register")}
            text={"Belum Punya Akun?"}
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
    paddingVertical: 50,
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
    marginTop: 20,
    maxHeight : 250,
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

export default Login;
