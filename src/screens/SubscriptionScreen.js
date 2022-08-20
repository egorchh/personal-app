import React, { useState, useCallback } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppTextRegular } from "../components/ui/AppTextRegular";
import { AppButton } from "../components/ui/AppButton";
import { AppTextInput } from "../components/ui/AppTextInput";
import { BottomNavbar } from "../components/BottomNavbar";

export const SubscriptionScreen = ({ navigation }) => {
  const [imageURL, setImageURL] = useState("");
  const [inputValue, setInputValue] = useState("");

  const changeImage = (url) => {
    setInputValue(url);
  };

  let uri = inputValue
    ? inputValue
    : "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=";

  return (
    <ImageBackground source={require("../image/bg-white.png")}>
      <AppLink
        style={styles.navLink}
        onPress={() => navigation.navigate("ContentScreen")}
      >
        <Entypo name="chevron-thin-left" size={18} color={THEME.GRAY_COLOR} />
        <AppTextSemiBold style={styles.navText}>Назад</AppTextSemiBold>
      </AppLink>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image
              source={{ uri: uri }}
              style={
                (styles.avatar,
                {
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginTop: height / 20,
                  marginBottom: height / 25,
                })
              }
            />
            <AppTextBold style={styles.title}>Моя подписка</AppTextBold>
            <AppTextRegular style={styles.text}>
              conceptagencyrylit
            </AppTextRegular>
            <View style={styles.buttonStyle}>
              <AppButton
                backgroundColor={THEME.GREEN_COLOR}
                color={THEME.WHITE_COLOR}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                Активна до 01.01.2022
              </AppButton>
            </View>
            <View style={styles.buttonStyle}>
              <AppButton
                backgroundColor={THEME.RED_COLOR}
                color={THEME.WHITE_COLOR}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                Отменить подписку
              </AppButton>
            </View>
            <AppTextBold style={styles.titleSettings}>Настройки</AppTextBold>
            <AppTextBold style={styles.settingsDescr}>
              Изменить фото
            </AppTextBold>
            <AppTextInput
              style={styles.input}
              value={{}}
              placeholder={"URL изображения"}
              onChangeText={(text) => setImageURL(text)}
            />
            <View style={styles.buttonStyle}>
              <AppButton
                backgroundColor={THEME.PURPLE_COLOR}
                color={THEME.WHITE_COLOR}
                onPress={() => changeImage(imageURL)}
              >
                Cохранить
              </AppButton>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.footer}>
        <BottomNavbar />
      </View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height,
    paddingTop: height / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    maxWidth: width,
    height: height * 1.1,
    alignItems: "center",
    paddingHorizontal: width * 0.07,
  },
  navLink: {
    width: "35%",
    top: 60,
    left: 23,
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: THEME.GRAY_COLOR,
    fontSize: 15,
    marginLeft: 7,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: height / 20,
    marginBottom: height / 25,
  },
  title: {
    textAlign: "center",
    color: THEME.BLACK_COLOR,
    fontSize: 23,
    marginBottom: height / 80,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: THEME.GRAY_COLOR,
    maxWidth: "92%",
    marginBottom: height / 25,
  },
  buttonStyle: {
    width: "100%",
  },
  titleSettings: {
    textAlign: "center",
    color: THEME.BLACK_COLOR,
    fontSize: 23,
    marginBottom: height / 25,
    marginTop: height / 25,
  },
  settingsDescr: {
    marginRight: "60%",
    fontSize: 17,
    marginBottom: height / 40,
  },
  input: {
    width: "95%",
  },
});
