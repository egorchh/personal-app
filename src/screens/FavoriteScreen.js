import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  View,
} from "react-native";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";
import { ContentList } from "../components/СontentList";
import { DataContext } from "../context/data/DataContext";

export const FavoriteScreen = ({ navigation }) => {
  const data = useContext(DataContext);

  // Валидация базы данных. Имутабельное удаление ключа nameplate с его свойством

  const deleteNameplates = (data) => {
    return data.map((item) =>
      Object.keys(item).reduce((acc, key) => {
        if (key !== "nameplate") {
          acc[key] = item[key];
        }

        return acc;
      }, {})
    );
  };

  return (
    <ImageBackground
      source={require("../image/bg-white.png")}
      style={styles.background}
    >
      <AppLink
        style={styles.navLink}
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <Entypo name="chevron-thin-left" size={18} color={THEME.GRAY_COLOR} />
        <AppTextSemiBold style={styles.navText}>Назад</AppTextSemiBold>
      </AppLink>
      <AppLink
        style={styles.search}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <Image
          style={{ width: 18, height: 18 }}
          source={require("../image/icon-search.png")}
        />
      </AppLink>
      <View style={styles.container}>
        <AppTextBold style={styles.title}>Мои закладки</AppTextBold>
        <ContentList data={deleteNameplates(data)} />
      </View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    paddingTop: height / 8,
  },
  navLink: {
    width: "35%",
    top: 60,
    left: 23,
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: THEME.GRAY_COLOR,
    fontSize: 15,
    marginLeft: 7,
  },
  title: {
    textAlign: "center",
    color: THEME.BLACK_COLOR,
    fontSize: 25,
    marginBottom: height / 20,
  },
  search: {
    position: "absolute",
    top: 60,
    left: width * 0.88,
  },
});
