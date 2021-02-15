import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const TabOneStack = createStackNavigator<Record<string, object | undefined>>();

export default () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Tab One Title", headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
};
