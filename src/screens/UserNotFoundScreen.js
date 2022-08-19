import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";

export const UserNotFoundScreen = ({ navigation }) => {
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
        <AppTextSemiBold style={styles.navText}>На главную</AppTextSemiBold>
      </AppLink>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../image/error.png")} style={styles.image} />
        <AppTextBold style={styles.title}>Пользователь не найден</AppTextBold>
        <AppTextBold style={styles.description}>
          Похоже, у тебя ещё нет подписки в моём приложении. Ты можешь
          приобрести её или попробовать войти ещё раз.
        </AppTextBold>
        <View style={styles.bottomStyle}>
          <AppButton
            backgroundColor={THEME.PURPLE_COLOR}
            color={THEME.WHITE_COLOR}
            onPress={() => navigation.navigate("SingupScreen")}
          >
            Получить подписку
          </AppButton>
          <AppButton
            backgroundColor={THEME.WHITE_COLOR}
            color={THEME.BLACK_COLOR}
            onPress={() => navigation.navigate("WelcomeScreen")}
          >
            На главную
          </AppButton>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  container: {
    maxWidth: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.07,
  },
  navText: {
    color: THEME.GRAY_COLOR,
    fontSize: 15,
    marginLeft: 7,
  },
  navLink: {
    width: "35%",
    top: 60,
    left: 23,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  image: {
    width: 124,
    height: 124,
    borderRadius: 25,
    marginTop: height / 12,
    marginBottom: height / 18,
  },
  title: {
    width: "80%",
    color: THEME.BLACK_COLOR,
    fontSize: 35,
    marginBottom: height / 40,
    textAlign: "center",
  },
  description: {
    width: "90%",
    color: THEME.GRAY_COLOR,
    fontSize: 15,
    marginBottom: height / 20,
    textAlign: "center",
    lineHeight: 23,
  },
  descriptContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptText: {
    fontSize: 10,
    color: THEME.GRAY_COLOR,
  },
  bottomStyle: {
    width: "100%",
  },
});
