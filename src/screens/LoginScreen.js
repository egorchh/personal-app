import React from "react";
import { StyleSheet, View } from "react-native";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";

import { THEME } from "../theme";

export const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <AppTextBold>Hello</AppTextBold>
      <AppButton
        title="go back"
        backgroundColor={THEME.PURPLE_COLOR}
        color={THEME.BLACK_COLOR}
        onPress={() => {
          navigation.navigate("WelcomeScreen");
        }}
      >
        На главную
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({});
