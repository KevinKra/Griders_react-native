import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Counter from "../components/Counter";

const ComponentScreen = () => {
  const greeting = <Text style={styles.subHeaderStyle}>Hello To you!</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen</Text>
      {greeting}
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24
  },
  subHeaderStyle: {
    fontSize: 16
  }
});

export default ComponentScreen;
