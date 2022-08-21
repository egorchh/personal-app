import React, { useContext } from "react";
import { AvatarContext } from "../context/avatars/AvatarsContext";

import { View, StyleSheet, Image, Dimensions, Pressable } from "react-native";

import { THEME } from "../theme";
import { AppTextSemiBold } from "./ui/AppTextSemiBold";

import { useNavigation } from "@react-navigation/native";

export const BottomNavbar = ({}) => {
  const navigation = useNavigation();

  const { uri } = useContext(AvatarContext);

  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={{
          top: height * 0.02,
          bottom: height * 0.02,
          left: 0,
          right: 0,
        }}
        style={styles.button}
        onPress={() => navigation.navigate("ContentScreen")}
      >
        <View style={styles.wrapper}>
          <Image
            style={styles.icon}
            source={require("../image/icon-star.png")}
          />
          <AppTextSemiBold style={styles.text}>Контент</AppTextSemiBold>
        </View>
      </Pressable>
      <Pressable
        hitSlop={{
          top: height * 0.02,
          bottom: height * 0.02,
          left: 0,
          right: 0,
        }}
        style={styles.button}
      >
        <View style={styles.wrapper}>
          <Image
            style={styles.icon}
            source={require("../image/icon-save.png")}
          />
          <AppTextSemiBold style={styles.text}>Закладки</AppTextSemiBold>
        </View>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("NotificationsScreen")}
        hitSlop={{
          top: height * 0.02,
          bottom: height * 0.02,
          left: 0,
          right: 0,
        }}
        style={styles.button}
      >
        <View style={styles.wrapper}>
          <Image
            style={styles.icon}
            source={require("../image/icon-bell.png")}
          />
          <AppTextSemiBold style={styles.text}>Уведомления</AppTextSemiBold>
        </View>
      </Pressable>
      <Pressable
        hitSlop={{
          top: height * 0.02,
          bottom: height * 0.02,
          left: 0,
          right: width * 0.125,
        }}
        style={styles.button}
        onPress={() => navigation.navigate("SubscriptionScreen")}
      >
        <View style={styles.wrapper}>
          <Image
            style={{ width: 32, height: 32, borderRadius: 16 }}
            source={{ uri: uri }}
          />
          <AppTextSemiBold style={styles.text}>Подписка</AppTextSemiBold>
        </View>
      </Pressable>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: THEME.WHITE_COLOR,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  wrapper: {
    height: height / 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 9,
    color: THEME.GRAY_COLOR,
  },
  icon: {
    width: 32,
    height: 32,
  },
  button: {
    width: width * 0.225,
  },
});
