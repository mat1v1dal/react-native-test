import React from "react";
import { StatusBar } from "expo-status-bar";
import constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import TextInputExample from "./TextInputExample.jsx";

function Main() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
      <TextInputExample placeholder="escribe algo" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: constants.statusBarHeight,
  },
});

export default Main;
