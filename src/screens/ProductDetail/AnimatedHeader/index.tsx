import React from "react";
import { Animated, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/Text";
import Button from "../../../components/Button";
import window from "../../../utils/getLayout";
import { Header, Content } from "./style";

const AnimatedHeader = ({ animatedValue }: any) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const HEADER_HEIGHT = window.window.height * 0.45;

  const headerBorderWidth = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT - 80, HEADER_HEIGHT - 40],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  const imageOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT - 80, HEADER_HEIGHT - 40],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  const TitleTop = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT - 80, HEADER_HEIGHT - 40],
    outputRange: [15, 10, 0],
    extrapolate: "clamp",
  });

  return (
    <Header>
      <Animated.View
        style={{
          paddingTop: insets.top,
          height: insets.top + 44,
          borderBottomColor: "#cfcfcf",
          borderBottomWidth: headerBorderWidth,
        }}
      >
        <Animated.View
          style={{
            opacity: imageOpacity,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: insets.top + 43,
            backgroundColor: "#fff",
          }}
        ></Animated.View>
        <Content style={{ backgroundColor: "transparent" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
              }}
            >
              <Button
                circle
                border
                iconName="chevron-left"
                onPress={() => navigation.goBack()}
              />
              <Animated.View
                style={{
                  top: TitleTop,
                  opacity: imageOpacity,
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                  numberOfLines={1}
                >
                  ADICOLOR SLICED TREFOIL
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    top: -10,
                  }}
                >
                  ฿25000
                </Text>
              </Animated.View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
              <Button circle border iconName="search" />
              <Button
                circle
                border
                iconName="shopping-bag"
                style={{ marginLeft: 10 }}
              />
            </View>
          </View>
        </Content>
      </Animated.View>
    </Header>
  );
};

export default AnimatedHeader;
