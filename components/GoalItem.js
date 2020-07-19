import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 1,
    width: 200,
  },
});

export default GoalItem;
