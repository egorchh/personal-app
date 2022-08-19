import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { THEME } from "../../theme";

import { AppTextSemiBold } from "./AppTextSemiBold";

export const AppSearch = ({
  children,
  placeholder,
  color,
  backgroundColor,
  onChangeText,
  value,
}) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={{ ...styles.input }}
        value={value}
        onChangeText={onChangeText}
      />
      <Wrapper onPress={() => console.log(value)}>
        <View style={{ ...styles.buttonContainer, backgroundColor }}>
          <AppTextSemiBold style={{ ...styles.text, color }}>
            {children}
          </AppTextSemiBold>
        </View>
      </Wrapper>
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  buttonContainer: {
    width: "20%",
    height: 60,
    backgroundColor: THEME.PURPLE_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    // width: "100%",
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
    width: "80%",
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
    // marginBottom: height / 35,
  },
});
