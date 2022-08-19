import React, { useContext } from "react";

import { ScrollView, StyleSheet, Dimensions } from "react-native";

import { ContentCard } from "./ContentCard";

export const ContentList = ({ data }) => {
  const cards = [
    data.map((item) => {
      return <ContentCard title={item.title} date={item.date} key={item.id} />;
    }),
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      contentInset={{ bottom: 100 }}
    >
      {cards}
    </ScrollView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: {
    maxWidth: "100%",
    height: 1500,
    alignItems: "center",
    paddingHorizontal: width * 0.07,
  },
});
