import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function TeamDetailsScreen({ route }) {
  const { item } = route.params;
  console.log(item.avatar);
  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.name}>
          {item.first_name} {item.last_name}
        </Text>
        <View style={styles.info}>
          <Text style={styles.title}>Information</Text>
          <Text style={styles.email}>Email: {item.email}</Text>
          <Text style={styles.phone}>Phone: {item.phone_number}</Text>
          <Text style={styles.dob}>D.O.B: {item.date_of_birth}</Text>
        </View>
        <View style={styles.employment}>
          <Text style={styles.title}>Employment</Text>
          <Text style={styles.employTitle}>Title: {item.employment.title}</Text>
          <Text style={styles.employSkill}>
            Skill: {item.employment.key_skill}
          </Text>
        </View>
        <View style={styles.address}>
          <Text style={styles.title}>Address</Text>
          <Text style={styles.streetName}>
            Street Name: {item.address.street_name}
          </Text>
          <Text style={styles.streetAddress}>
            Street Address: {item.address.street_address}
          </Text>
          <Text style={styles.state}>Zip Code: {item.address.zip_code}</Text>
          <Text style={styles.state}>State: {item.address.state}</Text>
          <Text style={styles.country}>Country: {item.address.country}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  avatar: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 100,
    marginTop: 20,
    alignSelf: "center",
  },

  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  info: {
    width: 350,
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },

  email: {
    marginVertical: 10,
  },

  phone: {
    marginVertical: 10,
  },

  dob: {
    marginVertical: 10,
  },

  employment: {
    width: 350,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },

  employTitle: {
    marginVertical: 10,
  },

  employSkill: {
    marginVertical: 10,
  },

  address: {
    width: 350,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },

  streetName: {
    marginVertical: 10,
  },

  streetAddress: {
    marginVertical: 10,
  },

  state: {
    marginVertical: 10,
  },

  country: {
    marginVertical: 10,
  },
});
