import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../context/GlobalData";

export default function TeamScreen({ navigation }) {
  const { teamList } = useGlobalContext();

  const teamItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: "Details",
            params: { item: item },
            merge: true,
          });
        }}
      >
        <View key={item.id} style={styles.team}>
          <Text style={styles.name}>
            {item.first_name} {item.last_name}
          </Text>
          <View style={styles.info}>
            <Text style={styles.email}>Email: {item.email}</Text>
            <Text>Phone: {item.phone_number}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={styles.container}>
      <Text style={styles.title}>Team members</Text>
      <FlatList
        data={teamList}
        renderItem={teamItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 50,
    alignItems: "center",
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
    width: 350,
    alignItems: "center",
  },

  name: {
    flexDirection: "row",
    fontSize: 16,
    fontWeight: "bold",
  },

  info: {
    alignItems: "center",
  },

  email: {
    paddingVertical: 10,
  },
});
