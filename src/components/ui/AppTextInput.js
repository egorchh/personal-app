import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";

export const AppTextInput = ({ style, placeholder, value, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={{ ...style, ...styles.input }}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: THEME.WHITE_COLOR,
    borderRadius: 10,
    width: "100%",
    fontFamily: "Gilroy-SemiBold",
    color: THEME.LIGHT_GRAY_COLOR,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.03,
    shadowRadius: 10.32,
    elevation: 0,
    marginBottom: height / 35,
  },
});
