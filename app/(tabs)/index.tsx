import Movies from "@/components/movies";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>What's trending?</Text>
      <Movies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18181b",
    flex: 1,
    paddingBottom: 48,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    marginTop: 12,
    padding: 16,
  },
});
