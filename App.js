import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem.js";
import GoalInput from "./components/GoalInput.js";
export default function App() {
  let x = 1;

  const [enteredGoals, setEnteredGoals] = useState([]);

  const Separator = () => <View style={styles.separator} />;
  const handlePress = () => console.log("text pressed");
  console.log("test in progress sir");

  const addGoalHandler = (goalTitle) => {
    setEnteredGoals((enteredGoals) => [
      ...enteredGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    /*Alert.alert("New goal:" + enteredGoal);*/
  };
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Discipline</Text>
      </View>
      <Image
        source={require("./assets/capturing-the-human-heart-TrhLCn1abMU-unsplash.jpg")}
        style={styles.logo}
      />
      <Separator />
      <GoalInput onAddGoal={addGoalHandler} />
      <Separator />
      <FlatList
        keyExtractor={(item, index) => item.key}
        style={styles.scrollingArea}
        data={enteredGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  logo: {
    width: "100%",
    height: 200,
  },

  separator: {
    marginVertical: 20,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  banner: {
    width: "100%",
    color: "white",
    height: 100,
    backgroundColor: "#eb3d3d",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    paddingTop: 20,
  },
  bannerText: {
    color: "white",
    fontSize: 30,
  },
  scrollingArea: {
    height: 100,
  },
});
