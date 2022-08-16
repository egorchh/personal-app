import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";
import { AppTextSemiBold } from "./ui/AppTextSemiBold";

export const ContentCard = ({ navigation }) => {
  return (
    <View style={styles.contentContainer}>
      <Image
        style={styles.preview}
        source={require("../image/welcome-bg.png")}
      />
      <View style={styles.desctiptionContainer}>
        <AppTextBold style={styles.descriptionTitle}>
          Чем я пользуюсь вместо VPN
        </AppTextBold>
        <AppTextSemiBold style={styles.descriptionText}>
          30 июля 2022
        </AppTextSemiBold>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 180,
    borderRadius: 8,
  },
  contentContainer: {
    width: "100%",
    height: 200,
    marginBottom: 30,
  },
  desctiptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  descriptionTitle: {
    color: THEME.BLACK_COLOR,
    fontSize: 16,
  },
  descriptionText: {
    color: THEME.LIGHT_GRAY_COLOR,
    fontSize: 12,
  },
});
