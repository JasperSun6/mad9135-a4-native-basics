import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../context/GlobalData";

export default function TeamScreen() {
  const { teamList } = useGlobalContext();
  console.log("teamList", teamList);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Our Team</Text>
      </View>
      <View>
        <FlatList
          data={teamList}
          renderItem={({ item }) => (
            <View style={styles.team}>
              <View style={styles.name}>
                <Text style={styles.fName}>{item.first_name}</Text>
                <Text>{item.last_name}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.email}>{item.email}</Text>
                <Text>{item.phone_number}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  team: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  name: {
    flexDirection: "row",
  },

  fName: {
    paddingRight: 5,
  },

  info: {
    alignItems: "center",
  },

  email: {
    paddingVertical: 10,
  },
});
