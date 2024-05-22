import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, TextInput } from "react-native";

function TextInputExample({ placeholder }) {
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});

export default TextInputExample;
