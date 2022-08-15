import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppLink } from "../components/ui/AppLink";
import { AppTextInput } from "../components/AppTextInput";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";

export const SingupScreen = ({ navigation }) => {
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
      <TouchableOpacity onPress={() => navigation.navigate("SuccessScreen")}>
        <Text>success</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("SubNotActiveScreen")}
      >
        <Text>error</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserNotFoundScreen")}
      >
        <Text>notFound</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.container}
        contentInset={{ top: 0, bottom: 100 }}
      >
        <Image
          source={require("../image/user-pic.png")}
          style={styles.avatar}
        />
        <AppTextBold style={styles.title}>Получить доступ</AppTextBold>
        <AppTextSemiBold style={styles.description}>
          Оформи подписку и получи доступ к самой эксклюзивной информации
        </AppTextSemiBold>
        <AppTextInput value={{}} placeholder={"Ник в telegram"} />
        <AppTextInput value={{}} placeholder={"Эл. почта"} />
        <AppTextInput value={{}} placeholder={"Пароль"} />
        <AppTextInput value={{}} placeholder={"Повтори пароль"} />
        <View style={styles.bottomStyle}>
          <AppButton
            backgroundColor={THEME.PURPLE_COLOR}
            color={THEME.WHITE_COLOR}
          >
            Купить доступ
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
    height: 1000,
    alignItems: "center",
    paddingTop: width / 6,
    paddingHorizontal: width * 0.07,
  },
  navLink: {
    width: "35%",
    top: 60,
    left: 23,
    flexDirection: "row",
    alignItems: "center",
    // zIndex: 1,
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
    marginBottom: height / 18,
  },
  title: {
    color: THEME.BLACK_COLOR,
    fontSize: 35,
    marginBottom: height / 40,
  },
  description: {
    color: THEME.BLACK_COLOR,
    fontSize: 15,
    lineHeight: 25,
    textAlign: "center",
    marginBottom: height / 20,
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
    marginTop: height / 35,
  },
});
