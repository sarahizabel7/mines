import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import Flag from "./Flag";

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}> = {props.flagsLeft} </Text>
      </View>
      <Button onPress={props.onNewGame} title="New Game" color="#2765F7" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20
  },
  flagContainer: {
    flexDirection: "row"
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 5,
    marginLeft: 20
  },
  button: {
    backgroundColor: "#999",
    padding: 5
  },
  buttonLabel: {
    fontSize: 20,
    color: "#DDD",
    fontWeight: "bold"
  }
});