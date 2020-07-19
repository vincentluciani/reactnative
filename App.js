import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  let x = 1;
  const [outputText, setOutputText] = useState(
    "Hello Mister Vincent ! How is life now in Warsaw, Poland ?"
  );
  const Separator = () => <View style={styles.separator} />;
  const handlePress = () => console.log("text pressed");
  console.log("test in progress sir");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        {outputText}
      </Text>
      <Separator />
      <Image source={require("./assets/icon.png")} style={styles.logo} />
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setOutputText("Very well, thank you Vincent sir");
          Alert.alert("Button pressed");
        }}
      >
        <Text style={styles.buttonTitle}>Button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    backgroundColor: "#788fdf",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 40,
    fontWeight: "400",
    color: "#fff",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
