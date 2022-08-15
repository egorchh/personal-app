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
import { AppTextInput } from "../components/AppTextInput";
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
        <AppTextInput
          style={styles.input}
          value={{}}
          placeholder={"Эл. почта"}
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
    width: "90%",
    textAlign: "center",
    color: THEME.BLACK_COLOR,
    fontSize: 35,
    marginBottom: height / 15,
  },
  bottomStyle: {
    width: "100%",
    marginTop: height / 35,
  },
});
