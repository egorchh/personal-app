import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  Image,
  View,
} from "react-native";
import { ContentCard } from "../components/ContentCard";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";
import { BottomNavbar } from "../components/BottomNavbar";

export const ContentScreen = ({ navigation }) => {
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
      <AppLink>
        <Image
          style={styles.searchIcon}
          source={require("../image/icon-search.png")}
        />
      </AppLink>
      <View style={styles.container}>
        <AppTextBold style={styles.title}>Эксклюзивный контент</AppTextBold>
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
      <BottomNavbar />
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
});
