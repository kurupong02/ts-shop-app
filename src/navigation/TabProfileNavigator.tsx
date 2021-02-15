import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";

const TabOneStack = createStackNavigator<Record<string, object | undefined>>();

export default () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: "Tab 3 Title" }}
      />
    </TabOneStack.Navigator>
  );
};
