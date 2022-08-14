import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { AppTextSemiBold } from "./AppTextSemiBold";

export const AppButton = ({ children, color, backgroundColor }) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper activeOpacity={0.8}>
      <View style={{ ...styles.button, backgroundColor }}>
        <AppTextSemiBold style={{ ...styles.text, color }}>
          {children}
        </AppTextSemiBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    minWidth: "100%",
    marginBottom: 18,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
