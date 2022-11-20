import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";

export default function TeamDetailsScreen() {
  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={styles.container}>
      <View>
        <Text>Details!</Text>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
