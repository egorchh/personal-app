import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";

export const PasswordScreen = ({ navigation }) => {
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
        <AppTextBold style={styles.title}>Восстановить пароль</AppTextBold>
        <TextInput style={styles.input} value={{}} placeholder="Новый пароль" />
        <TextInput
          style={styles.input}
          value={{}}
          placeholder="Повтори пароль"
        />
        <View style={styles.bottomStyle}>
          <AppButton
            backgroundColor={THEME.PURPLE_COLOR}
            color={THEME.WHITE_COLOR}
          >
            Восстановить
          </AppButton>
        </View>
      </ScrollView>
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
    justifyContent: "center",
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
  title: {
    textAlign: "center",
    color: THEME.BLACK_COLOR,
    fontSize: 35,
    marginBottom: height / 15,
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
    elevation: 0,
    marginBottom: height / 35,
  },
  bottomStyle: {
    width: "100%",
    marginTop: height / 35,
  },
});
