import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

const UserInput = ({ saveUsers }) => {
  const [impData, setImpData] = useState("");

  const addUsers = (e) => {
    saveUsers(impData);
    setImpData("");
  };

  return (
    <View style={styles.viewInput}>
      <TextInput style={styles.imp} value={impData} onChangeText={setImpData} />
      <Pressable style={styles.btn} onPress={addUsers}>
        <Text style={styles.btnTXT}>ADD</Text>
      </Pressable>
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  viewInput: {
    backgroundColor: "red",
    width: "96%",
    flex: 1,
    flexDirection: "row",
  },
  imp: {
    borderWidth: 2,
    height: 42,
    borderColor: "#aaa",
    borderRadius: 10,
    flex: 3,
  },
  btn: {
    flex: 1,
    backgroundColor: "#7010e6",
  },
  btnTXT: {
    color: "white",
  },
});
