import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";
import { AppTextSemiBold } from "./ui/AppTextSemiBold";
import { AppNameplate } from "./ui/AppNameplate";

export const ContentCard = ({ title, date, nameplatePropsObj }) => {
  return (
    <View style={styles.contentContainer}>
      <Image
        style={styles.preview}
        source={require("../image/welcome-bg.png")}
      />
      <AppNameplate
        color={THEME.WHITE_COLOR}
        backgroundColor={nameplatePropsObj.backgroundColor}
      >
        {nameplatePropsObj.title}
      </AppNameplate>
      <View style={styles.desctiptionContainer}>
        <AppTextBold style={styles.descriptionTitle}>{title}</AppTextBold>
        <AppTextSemiBold style={styles.descriptionText}>{date}</AppTextSemiBold>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 180,
    borderRadius: 8,
  },
  contentContainer: {
    width: width / 1.15,
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
