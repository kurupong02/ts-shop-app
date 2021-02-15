import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
// import TabHomeNavigator from "./TabHomeNavigator";
// import TabShopNavigator from "./TabShopNavigator";
// import TabProfileNavigator from "./TabProfileNavigator";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShopScreen from "../screens/ShopScreen";

import MyTabBar from "./MyTabBar";

const BottomTab = createBottomTabNavigator<
  Record<string, object | undefined>
>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <BottomTab.Screen
        name="TabHomeNavigator"
        component={HomeScreen}
        options={{
          title: "หน้าแรก",
        }}
      />
      <BottomTab.Screen
        name="TabShopNavigator"
        component={ShopScreen}
        options={{
          title: "ซื้อของ",
        }}
      />
      <BottomTab.Screen
        name="TabProfileNavigator"
        component={ProfileScreen}
        options={{
          title: "โปรไฟล์",
        }}
      />
    </BottomTab.Navigator>
  );
}
