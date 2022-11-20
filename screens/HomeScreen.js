import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={styles.container}>
      <Text style={styles.title}>J&S Logistics</Text>
      <Image style={styles.image} source={require("../assets/banner.png")} />
      <View style={styles.main}>
        <Text style={styles.subTitle}>LOGISTICS BEYOND YOUR EXPECTATIONS</Text>
        <Text style={styles.slogan}>
          True to Our Word We are Committed to deliver ever Load Safely and on
          Time
        </Text>
      </View>
      <View>
        <Text style={styles.weDoTitle}>WHAT WE DO</Text>
        <Text style={styles.weDoText}>
          We are asset based service provider with a dedicated team trained to
          offer you the most optimized solution for your business. We offer a
          wide range of over the road services like Full Truck Load (FTL), Less
          Than Truckload (LTL), specialized and expedited.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  image: {
    width: 350,
    height: 100,
    alignSelf: "center",
    marginVertical: 20,
  },

  main: {
    margin: 10,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  slogan: {
    fontSize: 18,
    fontStyle: "italic",
    paddingVertical: 10,
    textAlign: "center",
  },

  weDoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  weDoText: {
    fontSize: 17,
    paddingTop: 10,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
