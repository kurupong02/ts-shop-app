import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

type iconsProps = React.ComponentProps<typeof Feather>["name"];
const icons: iconsProps[] = ["home", "shopping-bag", "user"];

const MyTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const colorScheme = useColorScheme();

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{ flexDirection: "row", height: 50, backgroundColor: "#0b1423" }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const color = isFocused
          ? Colors[colorScheme].tabIconSelected
          : Colors[colorScheme].tabIconDefault;

        return (
          <TouchableOpacity
            key={index.toString()}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Feather name={icons[index]} size={24} color={color} />
              <Text style={{ fontSize: 12, color }}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
