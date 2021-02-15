import React, { useRef } from "react";
import { ScrollView, Animated } from "react-native";

import Container from "../../components/Container";
import Fetch from "../../components/Fetch";

import AnimatedHeader from "./AnimatedHeader";
import Banner from "./Banner";
import Promotions from "./Promotions";

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
        <Banner />
        <Promotions images={images1} title="โปรโมชั่น" />
        <Promotions images={images2} row={2} />
      </ScrollView>
    </Container>
  );
};

const images1 = [
  {
    image: "https://source.unsplash.com/1024x768/?nature",
  },
  {
    image: "https://source.unsplash.com/1024x768/?nature",
  },
  {
    image: "https://source.unsplash.com/1024x768/?nature",
  },
];

const images2 = [
  {
    image: "https://source.unsplash.com/1024x768/?nature",
  },
  {
    image: "https://source.unsplash.com/1024x768/?nature",
  },
  {
    image: "https://source.unsplash.com/1024x768/?nature",
  },
  {
    image: "https://source.unsplash.com/1024x768/?nature",
  },
];
