import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppTextRegular } from "../components/ui/AppTextRegular";
import { AppTextBold } from "../components/ui/AppTextBold";

import { THEME } from "../theme";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../image/welcome-bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image
            resizeMode="cover"
            source={require("../image/user-pic.png")}
            style={{ ...styles.avatar, width: 54, height: 54 }}
          />
          <AppTextBold style={styles.titleText}>
            Добро пожаловать в закрытый клуб Харчевникова
          </AppTextBold>
          <AppTextRegular style={styles.text}>
            Я Саня, а это моё приложение, в котором я делюсь с тобой тем, чего
            никогда не будет в открытом доступе
          </AppTextRegular>
        </View>
        <View style={styles.bottomDescription}>
          <View style={styles.buttonContainer}>
            <AppButton
              backgroundColor={THEME.PURPLE_COLOR}
              color={THEME.WHITE_COLOR}
            >
              Получить доступ
            </AppButton>
            <AppButton
              backgroundColor={THEME.WHITE_COLOR}
              color={THEME.BLACK_COLOR}
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              Войти
            </AppButton>
          </View>
          <View style={styles.descriptContainer}>
            <AppTextRegular style={styles.descriptText}>
              Харчевников Private App
            </AppTextRegular>
            <AppTextRegular style={styles.descriptText}>
              conceptagency.ru
            </AppTextRegular>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    maxWidth: width * 0.85,
    height: height,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    marginTop: "35%",
  },
  titleText: {
    color: THEME.WHITE_COLOR,
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 40,
    marginBottom: 30,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: THEME.LIGHT_GRAY_COLOR,
    lineHeight: 20,
    maxWidth: "92%",
  },
  avatar: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: Dimensions.get("screen").height / 8,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    marginBottom: Dimensions.get("screen").height / 25,
  },
  descriptContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptText: {
    fontSize: 9,
    fontWeight: "bold",
    color: THEME.LIGHT_GRAY_COLOR,
  },
  bottomDescription: {
    marginBottom: 30,
  },
});
