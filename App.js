import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserInput from "./Components/UserInput";
import { useState } from "react";
import UserIItems from "./Components/UserIItems";

export default function App() {
  const [users, setUsers] = useState([]);

  const saveUsers = (data) => {
    setUsers([...users, data]);
  };
  console.log(users);
  return (
    <View style={styles.container}>
      <UserInput saveUsers={saveUsers} />
      <View style={styles.items}></View>
      {users.map((user) => {
        return <UserIItems name={user} />;
      })}
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
    paddingTop: 48,
    paddingBottom: 20,
  },
  items: {
    backgroundColor: "blue",
    width: "96%",
    flex: 5,
  },
});
