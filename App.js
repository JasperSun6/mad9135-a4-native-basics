import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import TeamScreen from "./screens/TeamScreen";
import { GlobalProvider } from "./context/GlobalData";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <GlobalProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused, size, color }) => (
                  <FontAwesome name={"home"} size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Team"
              component={TeamScreen}
              options={{
                tabBarIcon: ({ focused, size, color }) => (
                  <Ionicons name={"people"} size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
