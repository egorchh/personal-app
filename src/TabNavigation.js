import React, { useContext } from "react";
import { AvatarContext } from "./context/avatars/AvatarsContext";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { THEME } from "./theme";
import { AppTextSemiBold } from "./components/ui/AppTextSemiBold";

import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContentScreen } from "./screens/ContentScreen";
import { SubscriptionScreen } from "./screens/SubscriptionScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";

export const TabNavigation = ({}) => {
  const { uri } = useContext(AvatarContext);
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: THEME.WHITE_COLOR,
          height: height / 11,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconStyle;
          let tabName;
          let textStyle;

          if (route.name === "Контент") {
            iconName = focused
              ? require("../src/image/icon-star-active.png")
              : require("../src/image/icon-star.png");
            iconStyle = styles.icon;
            textStyle = focused ? styles.textActive : styles.text;
            // } else if (route.name === 'Закладки') {
            //   iconName = focused ? require('../src/image/icon-save-active.png') : require('../src/image/icon-save.png');
            //   iconStyle = styles.icon;
            //   textStyle = focused ? styles.textActive : styles.text
          } else if (route.name === "Уведомления") {
            iconName = focused
              ? require("../src/image/icon-bell-active.png")
              : require("../src/image/icon-bell.png");
            iconStyle = styles.icon;
            textStyle = focused ? styles.textActive : styles.text;
          } else if (route.name === "Подписка") {
            iconName = { uri: uri };
            iconStyle = focused ? styles.avatarActive : styles.avatar;
            textStyle = focused ? styles.textActive : styles.text;
          }

          return (
            <View style={styles.wrapper}>
              <Image style={iconStyle} source={iconName} />
              <AppTextSemiBold style={textStyle}>
                {(tabName = route.name)}
              </AppTextSemiBold>
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Контент"
        component={ContentScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Уведомления"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Подписка"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
          name="Закладки"
          component={}
          options={{ headerShown: false }}
        /> */}
    </Tab.Navigator>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: width * 0.07,
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
  textActive: {
    fontSize: 9,
    color: THEME.PURPLE_COLOR,
  },
  icon: {
    width: 32,
    height: 32,
  },
  button: {
    width: width * 0.225,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  avatarActive: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: THEME.PURPLE_COLOR,
  },
});
