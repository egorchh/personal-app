import React, { useState, useContext } from "react";
import { StyleSheet, ImageBackground, Dimensions, View } from "react-native";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppSearch } from "../components/ui/AppSearch";
import { ContentList } from "../components/СontentList";
import { DataContext } from "../context/data/DataContext";

export const SearchScreen = ({ navigation }) => {
  const [value, setValue] = useState("");

  const data = useContext(DataContext);

  const inputHandler = (value, data) => {
    if (value.length === 0) {
      return data;
    }

    return data.filter((item) => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  };

  return (
    <ImageBackground
      source={require("../image/bg-white.png")}
      style={styles.background}
    >
      <AppLink
        style={styles.navLink}
        onPress={() => navigation.navigate("ContentScreen")}
      >
        <Entypo name="chevron-thin-left" size={18} color={THEME.GRAY_COLOR} />
        <AppTextSemiBold style={styles.navText}>Назад</AppTextSemiBold>
      </AppLink>
      <View style={styles.container}>
        <View>
          <AppTextBold style={styles.title}>Поиск</AppTextBold>
          <AppSearch
            value={value}
            placeholder={"Поиск"}
            onChangeText={(text) => setValue(text)}
          />
        </View>
        <AppTextBold style={styles.title}>Результаты</AppTextBold>
        <ContentList data={inputHandler(value, data)} />
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
    paddingTop: height / 10,
  },
  scrollContainer: {
    maxWidth: "100%",
    height: 1500,
    alignItems: "center",
    paddingHorizontal: width * 0.07,
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
  searchIcon: {
    width: 18,
    height: 18,
    top: 43,
    left: width * 0.88,
  },
  searchContainer: {
    alignItems: "center",
  },
});
