import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  View,
} from "react-native";
import { ContentCard } from "../components/ContentCard";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";
import { BottomNavbar } from "../components/BottomNavbar";
import { AppSearch } from "../components/ui/AppSearch";

export const SearchScreen = ({ navigation }) => {
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
            value={{}}
            placeholder={"Ник в telegram"}
            backgroundColor={THEME.PURPLE_COLOR}
          >
            <Ionicons name="search" size={25} color={THEME.WHITE_COLOR} />
          </AppSearch>
        </View>
        <AppTextBold style={styles.title}>Результаты</AppTextBold>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          contentInset={{ bottom: 100 }}
        >
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </ScrollView>
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
