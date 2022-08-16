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
import { AppTextInput } from "../components/ui/AppTextInput";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";

export const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../image/bg-white.png")}
      style={styles.background}
    >
      <AppLink
        onPress={() => navigation.navigate("WelcomeScreen")}
        style={styles.navLink}
      >
        <Entypo name="chevron-thin-left" size={18} color={THEME.GRAY_COLOR} />
        <AppTextSemiBold style={styles.navText}>На главную</AppTextSemiBold>
      </AppLink>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../image/user-pic.png")}
          style={styles.avatar}
        />
        <AppTextBold style={styles.title}>Войти</AppTextBold>
        <AppTextSemiBold style={styles.description}>
          Используя ник в telegram и пароль
        </AppTextSemiBold>
        <AppTextInput value={{}} placeholder={"Ник в telegram"} />
        <AppTextInput value={{}} placeholder={"••••••••••••"} />
        <View style={styles.questionsWrapper}>
          <AppLink onPress={() => navigation.navigate("SingupScreen")}>
            <AppTextSemiBold style={styles.questions}>
              Ещё нет доступа?
            </AppTextSemiBold>
          </AppLink>
          <AppLink onPress={() => navigation.navigate("PasswordScreen")}>
            <AppTextSemiBold style={styles.questions}>
              Забыл пароль?
            </AppTextSemiBold>
          </AppLink>
        </View>
        <View style={styles.bottomStyle}>
          <AppButton
            backgroundColor={THEME.PURPLE_COLOR}
            color={THEME.WHITE_COLOR}
            onPress={() => navigation.navigate("ContentScreen")}
          >
            Войти
          </AppButton>
        </View>
      </ScrollView>
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
    maxWidth: width,
    height: height,
    alignItems: "center",
    paddingTop: width / 6,
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
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 60,
    marginTop: height / 12,
    marginBottom: height / 18,
  },
  title: {
    color: THEME.BLACK_COLOR,
    fontSize: 35,
    marginBottom: height / 40,
  },
  description: {
    marginBottom: height / 20,
  },
  questionsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height / 70,
    marginBottom: "15%",
  },
  questions: {
    color: THEME.GRAY_COLOR,
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
