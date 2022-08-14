import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export const AppLink = ({ children, onPress, backgroundColor }) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={{ ...styles.button, backgroundColor }}>{children}</View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    minWidth: "100%",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
