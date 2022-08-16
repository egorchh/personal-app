import React from "react";

import { LoginScreen } from "./screens/LoginScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { SingupScreen } from "./screens/SingupScreen";
import { SuccessScreen } from "./screens/SuccessScreen";
import { SubNotActiveScreen } from "./screens/SubNotActiveScreen";
import { PasswordScreen } from "./screens/PasswordScreen";
import { UserNotFoundScreen } from "./screens/UserNotFoundScreen";
import { ContentScreen } from "./screens/ContentScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SingupScreen"
          component={SingupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SubNotActiveScreen"
          component={SubNotActiveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserNotFoundScreen"
          component={UserNotFoundScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContentScreen"
          component={ContentScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
