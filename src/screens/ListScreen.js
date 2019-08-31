import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend1", age: 15 },
    { name: "friend2" },
    { name: "friend3" },
    { name: "friend4" },
    { name: "friend5" },
    { name: "friend6" },
    { name: "friend7" },
    { name: "friend8" },
    { name: "friend9" },
    { name: "friend10" },
    { name: "friend11" }
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      // keyExtractor: favorable alternate to having keys on the objects (key is not needed on source obj in this case)
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age || "Immortal"}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
