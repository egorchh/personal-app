import { React } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { THEME } from "../theme";
import { AppTextSemiBold } from "./ui/AppTextSemiBold";

import { useNavigation } from "@react-navigation/native";

export const BottomNavbar = ({}) => {

  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Wrapper>
        <View style={styles.wrapper}>
          <Image
            style={styles.icon}
            source={require("../image/icon-star.png")}
          />
          <AppTextSemiBold style={styles.text}>Контент</AppTextSemiBold>
        </View>
      </Wrapper>
      <Wrapper>
        <View style={styles.wrapper}>
          <Image
            style={styles.icon}
            source={require("../image/icon-save.png")}
          />
          <AppTextSemiBold style={styles.text}>Закладки</AppTextSemiBold>
        </View>
      </Wrapper>
      <Wrapper>
        <View style={styles.wrapper}>
          <Image
            style={styles.icon}
            source={require("../image/icon-bell.png")}
          />
          <AppTextSemiBold style={styles.text}>Уведомления</AppTextSemiBold>
        </View>
      </Wrapper>
      <Wrapper
      onPress={() => navigation.navigate("SubscriptionScreen")}
      >
        <View style={styles.wrapper}>
          <Image
            style={{ ...styles.icon, borderRadius: 16 }}
            source={require("../image/user-pic.png")}
          />
          <AppTextSemiBold style={styles.text}>Подписка</AppTextSemiBold>
        </View>
      </Wrapper>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.07,
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
});
