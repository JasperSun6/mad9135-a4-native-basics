import React from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../context/GlobalData";

export default function TeamScreen({ navigation }) {
  const { teamList } = useGlobalContext();
  console.log("teamList", teamList);

  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={styles.container}>
      <View>
        <Text style={styles.title}>Our Team</Text>
      </View>
      <View>
        <FlatList
          data={teamList}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.team}>
              <View style={styles.name}>
                <Text style={styles.fName}>{item.first_name}</Text>
                <Text>{item.last_name}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.email}>{item.email}</Text>
                <Text>{item.phone_number}</Text>
              </View>
              <Button
                title="Show Details"
                onPress={() => {
                  navigation.navigate("Details", {
                    item: item,
                    id: item.id,
                    first_name: item.first_name,
                  });
                }}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 50,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },

  team: {
    borderWidth: 0.75,
    borderColor: "black",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
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
