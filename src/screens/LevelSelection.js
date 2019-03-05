import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Button
} from "react-native";

export default props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Select the level</Text>
          <View style={styles.button}>
            <Button
              color={styles.bgEasy.backgroundColor}
              title="Easy"
              onPress={() => props.onLevelSelected(0.1)}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={styles.bgNormal.backgroundColor}
              title="Intermediate"
              onPress={() => props.onLevelSelected(0.2)}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={styles.bgHard.backgroundColor}
              title="Hard"
              onPress={() => props.onLevelSelected(0.3)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  container: {
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    marginTop: 10,
    padding: 5
  },
  buttonLabel: {
    fontSize: 20,
    color: "#EEE"
  },
  bgEasy: {
    backgroundColor: "#49b65d"
  },
  bgNormal: {
    backgroundColor: "#2765F7"
  },
  bgHard: {
    backgroundColor: "#F26337"
  }
});
