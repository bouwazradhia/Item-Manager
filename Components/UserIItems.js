import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const UserIItems = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.userTXT}>{name}</Text>
      <Ionicons name="person-remove-outline" size={24} color="black" />
    </View>
  );
};

export default UserIItems;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#b5b1b1",
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent:
  },
  userTXT: {},
});
