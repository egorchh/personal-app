import React, { useContext } from "react";
import { AvatarContext } from "../context/avatars/AvatarsContext";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppTextRegular } from "../components/ui/AppTextRegular";
import { AppTextBold } from "../components/ui/AppTextBold";

import { THEME } from "../theme";

export const WelcomeScreen = ({ navigation }) => {
  const { uri } = useContext(AvatarContext);

  return (
    <ImageBackground
      source={require("../image/welcome-bg.png")}
      style={styles.image}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.userInfo}>
          <Image
            resizeMode="cover"
            source={{ uri: uri }}
            style={{ ...styles.avatar, width: 112, height: 112 }}
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
              onPress={() => {
                navigation.navigate("SingupScreen");
              }}
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
      </ScrollView>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: {
    maxWidth: width * 0.85,
    height: height,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  image: {
    width: width,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    marginTop: "25%",
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
    borderRadius: 56,
    marginBottom: Dimensions.get("screen").height / 16,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    marginBottom: Dimensions.get("screen").height / 70,
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
    marginBottom: height / 25,
  },
});
