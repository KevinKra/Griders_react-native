import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => {
          setName(newValue);
        }}
      />
      {/* <Text>Hello, {name}.</Text> */}
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => {
          setPassword(newValue);
        }}
      />
      {password.length < 5 ? <Text>Password is too short</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "red",
    borderWidth: 1
  }
});

export default TextScreen;
