import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>J&S Logistics</Text>
        <Image style={styles.image} source={require("../assets/banner.png")} />
        <View style={styles.main}>
          <Text style={styles.subTitle}>
            LOGISTICS BEYOND YOUR EXPECTATIONS
          </Text>
          <Text style={styles.slogan}>
            True to Our Word We are Committed to deliver ever Load Safely and on
            Time
          </Text>
        </View>
        <View style={styles.weDo}>
          <Text style={styles.weDoTitle}>WHAT WE DO</Text>
          <Text style={styles.weDoText}>
            We are asset based service provider with a dedicated team trained to
            offer you the most optimized solution for your business. We offer a
            wide range of over the road services like Full Truck Load (FTL),
            Less Than Truckload (LTL), specialized and expedited.
          </Text>
          <Text style={styles.weDoText}>
            If you needs include fresh produce, pharmaceuticals, fresh or frozen
            meats, papers rolls, Automotive or any other dry or Temperature
            Controlled Freight, We&apos;ve got you covered. We pride ourselves
            on competitive and on-time services.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  image: {
    width: 350,
    height: 100,
    display: "flex",
    alignSelf: "center",
    marginVertical: 20,
  },

  main: {
    alignItems: "center",
    justifyContent: "center",
  },

  subTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },

  slogan: {
    fontSize: 20,
    fontStyle: "italic",
    paddingTop: 10,
    textAlign: "center",
  },

  weDo: {
    paddingVertical: 10,
  },

  weDoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  weDoText: {
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
