import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TeamScreen from "./TeamScreen";
import TeamDetailsScreen from "./TeamDetailsScreen";

export default function TeamStackScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Team"
        component={TeamScreen}
        options={{
          headerStyle: { backgroundColor: "#1FA2FF" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Details"
        component={TeamDetailsScreen}
        options={{
          headerStyle: { backgroundColor: "#1FA2FF" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
