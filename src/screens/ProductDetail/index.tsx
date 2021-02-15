import React, { useRef } from "react";
import { ScrollView, Animated, View, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import Fetch from "../../components/Fetch";
import Container from "../../components/Container";
import TagGroup from "../../components/TagGroup";
import FooterButton from "../../components/FooterButton";

import Text from "../../components/Text";
import window from "../../utils/getLayout";
import TabView from "./TabView";
import request from "../../utils/request";
import AnimatedHeader from "./AnimatedHeader";
import { Content } from "./style";

export default () => {
  const offset = useRef(new Animated.Value(0)).current;
  const { params } = useRoute();

  const fetch = async () => {
    const res = await request().get(`/products/${params.productId}`);
    return res.data;
  };

  return (
    <Container>
      <AnimatedHeader animatedValue={offset} />
      <Fetch fetch={fetch} skeletonName="shopListSkeleton">
        {({ res }) => {
          return (
            <>
              <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: offset } } }],
                  { useNativeDriver: false }
                )}
              >
                <View>
                  <Image
                    source={{ uri: res[0].image[0] }}
                    style={{ height: window.window.height * 0.45 }}
                  />
                  <Content>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 20,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        {res[0].name}
                      </Text>
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        {`฿${res[0].price}`}
                      </Text>
                    </View>
                    <Text note>เลือกขนาด</Text>
                    <TagGroup tags={tags} style={{ marginVertical: 16 }} />
                    <TabView description={res[0].description} />
                  </Content>
                </View>
              </ScrollView>
              <FooterButton label="เพิ่มลงในตระกร้า" iconName="shopping-bag" />
            </>
          );
        }}
      </Fetch>
    </Container>
  );
};

const tags = [
  {
    label: "S",
    value: "s",
  },
  {
    label: "M",
    value: "m",
  },
  {
    label: "L",
    value: "l",
  },
];
