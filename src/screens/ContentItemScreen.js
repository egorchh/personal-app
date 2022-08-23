import React, { useState, useContext } from "react";

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

import { DataContext } from "../context/data/DataContext";

export const ContentItemScreen = ({ navigation }) => {
  const [favorite, setFavorite] = useState(false);

  const data = useContext(DataContext);

  // const chooseDataItem = (data, id) => {

  // }

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
        <AppTextBold style={styles.title}>
          Где меня можно встретить в Москве? Рассказываю про места, где я часто
          бываю.
        </AppTextBold>
        <AppTextSemiBold style={styles.date}>
          27 июля 2022 в 17:02
        </AppTextSemiBold>
        <AppTextSemiBold style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore
          animi error vitae, a qui quidem delectus dolorem assumenda porro
          molestiae dolores debitis eligendi aut consectetur autem quaerat
          cupiditate sit atque harum temporibus officiis. Cum qui odio eveniet
          deleniti. Similique reprehenderit beatae maiores placeat eum?
          Provident ratione blanditiis quidem ad!
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
