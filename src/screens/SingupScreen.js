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
      <TouchableOpacity
        style={styles.navLink}
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <Entypo name="chevron-thin-left" size={18} color={THEME.GRAY_COLOR} />
        <AppTextSemiBold style={styles.navText}>На главную</AppTextSemiBold>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SuccessScreen")}>
        <Text>success</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ErrorScreen")}>
        <Text>error</Text>
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
        <TextInput
          style={styles.input}
          value={{}}
          placeholder="Ник в telegram"
        />
        <TextInput style={styles.input} value={{}} placeholder="Эл. почта" />
        <TextInput style={styles.input} value={{}} placeholder="Пароль" />
        <TextInput
          style={styles.input}
          value={{}}
          placeholder="Повтори пароль"
        />
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
    height: height,
    alignItems: "center",
    paddingTop: width / 6,
    paddingHorizontal: width * 0.07,
    // paddingBottom: height / 20,
  },
  navLink: {
    width: "35%",
    top: 60,
    left: 23,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
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
