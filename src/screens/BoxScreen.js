import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box Screen 1</Text>
      <Text style={styles.textTwoStyle}>Box Screen 2</Text>
      <Text style={styles.textThreeStyle}>Box Screen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "black",
    height: 200
  },
  textOneStyle: {
    flex: 2,
    padding: 2,
    borderWidth: 1,
    height: "100%",
    borderColor: "red"
  },
  textTwoStyle: {
    flex: 3,
    alignSelf: "center",
    padding: 2,
    borderWidth: 1,
    borderColor: "blue",
    fontSize: 18,
    ...StyleSheet.absoluteFillObject
    // ^ built in shorthand for below
    // position: "absolute",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0
  },
  textThreeStyle: {
    flex: 1,
    alignSelf: "stretch",
    padding: 2,
    borderWidth: 1,
    // width: "100%",
    borderColor: "red"
  }
});

export default BoxScreen;
