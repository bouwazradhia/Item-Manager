import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserIItems = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.userTXT}>{name}</Text>
    </View>
  );
};

export default UserIItems;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#b5b1b1",
    marginVertical: 8,
    padding: 8,
  },
});
