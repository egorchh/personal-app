import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppLink } from "../components/ui/AppLink";
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
      <View style={styles.container}>
        <View style={styles.nav}>
          <AppLink
            style={styles.navLink}
            onPress={() => {
              navigation.navigate("WelcomeScreen");
            }}
          >
            <Entypo
              name="chevron-thin-left"
              size={18}
              color={THEME.GRAY_COLOR}
            />
            <AppTextSemiBold style={styles.navText}>На главную</AppTextSemiBold>
          </AppLink>
        </View>
        <Image
          source={require("../image/user-pic.png")}
          style={styles.avatar}
        />
        <AppTextBold style={styles.title}>Войти</AppTextBold>
        <AppTextSemiBold style={styles.description}>
          Используя ник в telegram и пароль
        </AppTextSemiBold>
        <TextInput
          style={styles.input}
          value={{}}
          placeholder="Ник в telegram"
        />
        <TextInput style={styles.input} value={{}} placeholder="••••••••••••" />
        <View style={styles.questionsWrapper}>
          <AppTextSemiBold style={styles.questions}>
            Ещё нет доступа?
          </AppTextSemiBold>
          <AppTextSemiBold style={styles.questions}>
            Забыл пароль?
          </AppTextSemiBold>
        </View>
        <View style={styles.bottomStyle}>
          <AppButton
            backgroundColor={THEME.PURPLE_COLOR}
            color={THEME.WHITE_COLOR}
          >
            Войти
          </AppButton>
          <View style={styles.descriptContainer}>
            <AppTextSemiBold style={styles.descriptText}>
              Харчевников Private App
            </AppTextSemiBold>
            <AppTextSemiBold style={styles.descriptText}>
              conceptagency.ru
            </AppTextSemiBold>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    maxWidth: width,
    height: height,
    alignItems: "center",
    paddingTop: width / 6,
    paddingHorizontal: width * 0.07,
    // paddingBottom: height / 20,
  },
  nav: {
    position: "absolute",
    top: 60,
    left: width * 0.07,
  },
  navText: {
    color: THEME.GRAY_COLOR,
    fontSize: 15,
    marginLeft: 7,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 60,
    marginTop: height / 12,
    marginBottom: height / 20,
  },
  title: {
    color: THEME.BLACK_COLOR,
    fontSize: 40,
    marginBottom: height / 50,
  },
  description: {
    color: THEME.BLACK_COLOR,
    fontSize: 15,
    marginBottom: height / 20,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: THEME.WHITE_COLOR,
    borderRadius: 10,
    width: "100%",
    fontFamily: "Gilroy-SemiBold",
    color: THEME.LIGHT_GRAY_COLOR,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.03,
    shadowRadius: 10.32,
    elevation: 16,
    marginBottom: height / 35,
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
