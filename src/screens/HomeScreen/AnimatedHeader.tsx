import React from "react";
import { Animated, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../../components/Text";
import LogoIcon from "../../assets/images/logo.png";

const HEADER_HEIGHT = 200;

const AnimatedHeader = ({ animatedValue }) => {
  const insets = useSafeAreaInsets();

  const imageOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT * 0.8],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, insets.top + 50],
    outputRange: [insets.top + 50, insets.top + 50],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
        backgroundColor: "transparent",
      }}
    >
      <Animated.View
        style={{
          opacity: imageOpacity,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: headerHeight,
          backgroundColor: "#fff",
        }}
      ></Animated.View>
      <View
        style={{
          paddingTop: insets.top,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 2,
            backgroundColor: "#fff",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Image
            style={{ height: 38, width: 134 }}
            source={LogoIcon}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: "#fff",
          }}
        >
          <Text>dsds</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default AnimatedHeader;
