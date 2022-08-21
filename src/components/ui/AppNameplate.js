import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../../theme";

import { AppTextSemiBold } from "./AppTextSemiBold";

export const AppNameplate = ({ children, backgroundColor, color }) => {
  return (
    <View style={{ ...styles.nameplate, backgroundColor }}>
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
    top: 10,
    left: 10,
    maxWidth: 100,
    borderRadius: 3,
    borderTopLeftRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: THEME.PURPLE_COLOR,
  },
  nameplateText: {
    fontSize: 11,
  },
});
