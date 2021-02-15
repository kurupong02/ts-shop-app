import React, { useRef } from "react";
import { ScrollView, Animated, StyleSheet } from "react-native";

import Container from "../../components/Container";
import AnimatedHeader from "./AnimatedHeader";

export default () => {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <AnimatedHeader animatedValue={offset} />
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
      >
        {/* <Menus> */}
      </ScrollView>
    </Container>
  );
};
