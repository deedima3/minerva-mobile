import React from "react";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
} from "react-native";

interface Props {
  control: Control<FieldValues, any>;
  label: string;
  errors: {
    [x: string]: any;
  };
  placeholder: string;
  name: string;
  rules: any;
}

const CustomTextInput = ({
  control,
  label,
  errors,
  placeholder,
  name,
  rules,
}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder={placeholder}
          />
        )}
        name={name}
        rules={rules}
      />
      {errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 5,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    height: 40,
    minWidth: "100%",
    padding: 10,
    borderRadius: 10,
    color: "#000000",
    marginTop: 5,
  },
  error: {
    color: "red",
    fontSize: 14,
  },
});

export default CustomTextInput;
