import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Counter extends Component {
  state = {
    count: 0
  };
  updateNumber = format => {
    const count = this.state.count;
    if (format === "increment") return this.setState({ count: count + 1 });
    if (format === "decrement") return this.setState({ count: count - 1 });
    else return "Incorrect format entered";
  };
  render() {
    return (
      <View>
        <Button
          title="Increase"
          onPress={() => this.updateNumber("increment")}
        />
        <Button
          title="Decrease"
          onPress={() => this.updateNumber("decrement")}
        />
        <Text> Current Number = {this.state.count} </Text>
      </View>
    );
  }
}
