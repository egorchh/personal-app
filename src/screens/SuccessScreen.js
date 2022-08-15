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

import { THEME } from "../theme";
import { AppTextBold } from "../components/ui/AppTextBold";

export const SuccessScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../image/bg-white.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../image/success.png")} style={styles.image} />
        <AppTextBold style={styles.title}>Успешно!</AppTextBold>
        <AppTextBold style={styles.description}>
          Теперь ты часть нашего закрытого клуба. Входи по нику в tg и паролю, а
          подпиской управляй в личном кабинете.
        </AppTextBold>
        <View style={styles.bottomStyle}>
          <AppButton
            backgroundColor={THEME.GREEN_COLOR}
            color={THEME.WHITE_COLOR}
          >
            Войти в клуб
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
    color: THEME.BLACK_COLOR,
    fontSize: 35,
    marginBottom: height / 40,
  },
  description: {
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
