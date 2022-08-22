import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../../theme";

import { AppTextSemiBold } from "./AppTextSemiBold";

export const AppNameplate = ({ children, backgroundColor, color, style }) => {
  return (
    <View style={{ ...style, ...styles.nameplate, backgroundColor }}>
      <AppTextSemiBold style={{ color, ...styles.nameplateText }}>
        {children}
      </AppTextSemiBold>
    </View>
  );
};

const styles = StyleSheet.create({
  nameplate: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    maxWidth: 100,
    borderRadius: 3,
    borderTopLeftRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: THEME.PURPLE_COLOR,
  },
  nameplateText: {
    fontSize: 9,
  },
});
