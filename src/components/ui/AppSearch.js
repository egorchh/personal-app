import React from "react";
import { TextInput, StyleSheet, Dimensions, View } from "react-native";
import { THEME } from "../../theme";

export const AppSearch = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={{ ...styles.input }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height / 20,
    paddingHorizontal: width * 0.07,
  },
  input: {
    paddingHorizontal: 20,
    backgroundColor: THEME.WHITE_COLOR,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: 60,
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
  },
});
