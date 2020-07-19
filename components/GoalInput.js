import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

const GoalInput = (props) => {
  const Separator = () => <View style={styles.separator} />;

  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style="styles.inputContainer">
      <View>
        <TextInput
          style={styles.editBox}
          placeholder="Enter a habit goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
      </View>
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={props.onAddGoal.bind(this, enteredGoal)}
        >
          <Text style={styles.buttonTitle} numberOfLines={1}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 1,
    width: 200,
  },
  editBox: {
    borderColor: "lightgrey",
    borderWidth: 1,
    width: 300,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    backgroundColor: "#eb3d3d",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 40,
    fontWeight: "400",
    color: "#fff",
  },
  separator: {
    marginVertical: 20,
  },
});

export default GoalInput;
