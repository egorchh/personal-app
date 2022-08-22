import React, { useState, useContext } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  View,
} from "react-native";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";
// import { BottomNavbar } from "../components/BottomNavbar";
import { ContentListNameplates } from "../components/ContentListNameplates";
import { DataContext } from "../context/data/DataContext";

export const NotificationsScreen = ({ navigation }) => {
  const data = useContext(DataContext);

  const [filterData, setFilterData] = useState(data);

  // Подчеркивание выбранного элемента, уверен что говно реализация + Фильтрация по тегам
  const [all, setAll] = useState(
    <>
      <View
        style={{
          height: 4,
          width: "100%",
          backgroundColor: THEME.BLACK_COLOR,
          position: "absolute",
          bottom: -12,
        }}
      ></View>
    </>
  );
  const [excl, setExcl] = useState(null);
  const [rec, setRec] = useState(null);

  const onFilterAll = () => {
    setAll(
      <>
        <View
          style={{
            height: 4,
            width: "100%",
            backgroundColor: THEME.BLACK_COLOR,
            position: "absolute",
            bottom: -12,
          }}
        ></View>
      </>
    );
    setRec(null);
    setExcl(null);

    setFilterData(data);
  };

  const onFilterExcl = () => {
    setExcl(
      <>
        <View
          style={{
            height: 4,
            width: "100%",
            backgroundColor: THEME.BLACK_COLOR,
            position: "absolute",
            bottom: -12,
          }}
        ></View>
      </>
    );
    setAll(null);
    setRec(null);

    setFilterData(data.filter((item) => item.nameplate.includes("Эксклюзив")));
  };

  const onFilterRec = () => {
    setRec(
      <>
        <View
          style={{
            height: 4,
            width: "100%",
            backgroundColor: THEME.BLACK_COLOR,
            position: "absolute",
            bottom: -12,
          }}
        ></View>
      </>
    );
    setAll(null);
    setExcl(null);

    setFilterData(data.filter((item) => item.nameplate.includes("Советую")));
  };

  return (
    <ImageBackground
      source={require("../image/bg-white.png")}
      style={styles.background}
    >
      <AppLink
        style={styles.navLink}
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <Entypo name="chevron-thin-left" size={18} color={THEME.GRAY_COLOR} />
        <AppTextSemiBold style={styles.navText}>Назад</AppTextSemiBold>
      </AppLink>
      <AppLink
        style={styles.search}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <Image
          style={{ width: 18, height: 18 }}
          source={require("../image/icon-search.png")}
        />
      </AppLink>
      <View style={styles.container}>
        <AppTextBold style={styles.title}>Последнее за 24 часа</AppTextBold>
        <View style={styles.filter}>
          <>
            <AppLink onPress={onFilterAll}>
              <AppTextSemiBold>Весь контент</AppTextSemiBold>
              {all}
            </AppLink>
          </>

          <AppLink onPress={onFilterExcl}>
            <AppTextSemiBold>Эксклюзив</AppTextSemiBold>
            {excl}
          </AppLink>
          <AppLink onPress={onFilterRec}>
            <AppTextSemiBold>Рекомендации</AppTextSemiBold>
            {rec}
          </AppLink>
        </View>
        <ContentListNameplates data={filterData} />
      </View>
      {/* <BottomNavbar /> */}
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    alignItems: "center",
    width: "100%",
    paddingTop: height / 6,
  },
  navLink: {
    width: "35%",
    position: "absolute",
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
  title: {
    textAlign: "center",
    color: THEME.BLACK_COLOR,
    fontSize: 25,
    marginBottom: height / 20,
  },
  search: {
    position: "absolute",
    top: 60,
    left: width * 0.88,
  },
  filter: {
    width: "88%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height / 15,
  },
});
