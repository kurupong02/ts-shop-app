import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShopScreen from "../screens/ShopScreen";

const TabOneStack = createStackNavigator<Record<string, object | undefined>>();

export default () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
};
