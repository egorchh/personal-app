import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { DataContext } from "./src/context/data/DataContext";

import Navigation from "./src/navigation";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [font, setFont] = useState(false);
  const [data, setData] = useState([
    { id: 1, title: "Чем я пользуюсь вместо VPN", date: "30 июня 2022" },
    { id: 2, title: "Тестовое название видео", date: "22 июня 2021" },
    { id: 3, title: "Как выучить React Native за час", date: "12 июля 2022" },
    { id: 4, title: "Выучить JavaScript", date: "11 августа 2020" },
    { id: 5, title: "Выучить TypeScript за 3 минуты", date: "11 августа 2020" },
  ]);

  // const [resImage, setResImage] = useState("");

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
          "Gilroy-SemiBold": require("./assets/fonts/Gilroy-SemiBold.ttf"),
          "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFont(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (font) {
      await SplashScreen.hideAsync();
    }
  }, [font]);

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <DataContext.Provider value={data}>
        <Navigation />
      </DataContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
