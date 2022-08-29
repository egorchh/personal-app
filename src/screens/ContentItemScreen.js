import React, { useState } from "react";

import {
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";

import { AppLink } from "../components/ui/AppLink";

import { AppTextBold } from "../components/ui/AppTextBold";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";

import { THEME } from "../theme";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const ContentItemScreen = ({ navigation, route }) => {
  const [favorite, setFavorite] = useState(false);

  const { item } = route.params;

  const saveContentItem = () => {
    setFavorite(favorite ? false : true);
  };

  return (
    <>
      <ImageBackground
        style={styles.image}
        source={require("../image/welcome-bg.png")}
      >
        <AppLink
          style={styles.navLink}
          onPress={() => navigation.navigate("Контент")}
        >
          <Entypo
            name="chevron-thin-left"
            size={18}
            color={THEME.WHITE_COLOR}
          />
          <AppTextSemiBold style={styles.navText}>Назад</AppTextSemiBold>
        </AppLink>
        <AppLink style={styles.search} onPress={saveContentItem}>
          <MaterialIcons
            name={favorite ? "favorite" : "favorite-border"}
            size={20}
            color={THEME.WHITE_COLOR}
          />
        </AppLink>
      </ImageBackground>
      <ScrollView style={styles.container}>
        <AppTextBold style={styles.title}>{item.title}</AppTextBold>
        <AppTextSemiBold style={styles.date}>
          {item.date} в 17:02
        </AppTextSemiBold>
        <AppTextSemiBold style={styles.text}>
          {item.description}
        </AppTextSemiBold>
      </ScrollView>
    </>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    height: height / 2.5,
    width: width,
    marginBottom: height / 25,
  },
  navLink: {
    width: "35%",
    top: 60,
    left: 23,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
  navText: {
    color: THEME.WHITE_COLOR,
    fontSize: 15,
    marginLeft: 7,
  },
  search: {
    position: "absolute",
    top: 60,
    left: width * 0.88,
    zIndex: 10,
  },
  container: {
    width: width,
    height: height,
    paddingHorizontal: width * 0.08,
  },
  title: {
    textAlign: "left",
    fontSize: 23,
    lineHeight: 26,
    marginBottom: height / 65,
  },
  date: {
    color: THEME.GRAY_COLOR,
    textAlign: "left",
    fontSize: 12,
    marginBottom: height / 25,
  },
  text: {
    lineHeight: 22,
    color: THEME.GRAY_COLOR,
    textAlign: "left",
    fontSize: 12,
  },
});
