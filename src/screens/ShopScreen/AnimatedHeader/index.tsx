import React from "react";
import { Animated, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import TagGroup from "../../../components/TagGroup";
import { TagProps } from "../../../constants/types";

import window from "../../../utils/getLayout";
import { Header, Content, ButtonGroupRight } from "./style";

const HEADER_HEIGHT = 100;

interface Props {
  animatedValue: any;
  onTagSelect: (tag: TagProps) => void;
  tags: TagProps[];
}

const AnimatedHeader: React.FC<Props> = ({
  animatedValue,
  onTagSelect,
  tags,
}) => {
  const insets = useSafeAreaInsets();
  const windowWidth = window.window.width - 24;

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: "clamp",
  });

  const titleTop = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [insets.top - 50, insets.top - 80],
  });

  const titleOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [1, 0],
  });

  const tagsTop = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [insets.top, insets.top - 50],
    extrapolate: "clamp",
  });

  const tagsWidth = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT - 40],
    outputRange: [windowWidth, windowWidth - 80],
    extrapolate: "clamp",
  });

  return (
    <Header>
      <Animated.View
        style={{
          paddingTop: insets.top,
          height: headerHeight,
        }}
      >
        <Content>
          <View>
            <Animated.View
              style={{
                top: titleTop,
                position: "absolute",
                opacity: titleOpacity,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>ซื้อของ</Text>
            </Animated.View>
            <ButtonGroupRight>
              <Button circle iconName="search" />
              <Button
                circle
                iconName="shopping-bag"
                style={{ marginLeft: 10 }}
              />
            </ButtonGroupRight>
            <Animated.View
              style={{
                position: "absolute",
                top: tagsTop,
                width: tagsWidth,
              }}
            >
              <TagGroup tags={tags} onSelect={onTagSelect} />
            </Animated.View>
          </View>
        </Content>
      </Animated.View>
    </Header>
  );
};

export default AnimatedHeader;
