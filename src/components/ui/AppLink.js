import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import { THEME } from "../../theme";

export const AppLink = ({ children, onPress, style }) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.8}>
      <View style={{ ...style, ...styles.text }}>{children}</View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    color: THEME.BLACK_COLOR,
    fontSize: 15,
  },
});
