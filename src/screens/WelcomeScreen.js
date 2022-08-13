import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { AppButton } from "../components/ui/AppButton";

import { THEME } from "../theme";

export const WelcomeScreen = () => {
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
          <Text style={styles.titleText}>
            Добро пожаловать в закрытый клуб Харчевникова
          </Text>
          <Text style={styles.text}>
            Я Саня, а это моё приложение, в котором я делюсь с тобой тем, чего
            никогда не будет в открытом доступе
          </Text>
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
            >
              Войти
            </AppButton>
          </View>
          <View style={styles.descriptContainer}>
            <Text style={styles.descriptText}>Харчевников Private App</Text>
            <Text style={styles.descriptText}>conceptagency.ru</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "85%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
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
    maxWidth: "78%",
  },
  avatar: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 60,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
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
