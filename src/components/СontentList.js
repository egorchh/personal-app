import React, { useState, useEffect } from "react";

import { FlatList, StyleSheet, Dimensions } from "react-native";

import { ContentCard } from "./ContentCard";

export const ContentList = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  //Валидация длины названия видео  ==========================================================

  const validateTitle = (title) => {
    return title.length <= 26 ? title : title.slice(0, 26) + "...";
  };

  const renderItem = ({ item }) => (
    <ContentCard
      title={validateTitle(item.title)}
      date={item.date}
      key={item.id}
    />
  );

  useEffect(() => {
    getPosts();
  }, [data]);

  const getPosts = () => {
    setIsLoading(true);
    setCards(data);
    setIsLoading(false);
  };

  return (
    <FlatList
      contentContainerStyle={styles.scrollContainer}
      data={cards}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onRefresh={getPosts}
      refreshing={isLoading}
    />
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
