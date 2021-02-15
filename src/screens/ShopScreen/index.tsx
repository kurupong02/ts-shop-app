import React, { useRef, useState } from "react";
import { ScrollView, Animated, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Container from "../../components/Container";
import Fetch from "../../components/Fetch";
import ShopMenuCard from "../../components/ShopMenuCard";
import window from "../../utils/getLayout";
import request from "../../utils/request";
import { ProductProps, TagProps } from "../../constants/types";

import AnimatedHeader from "./AnimatedHeader";
import { List, Content } from "./style";

export default () => {
  const navigation = useNavigation();
  const offset = useRef(new Animated.Value(0)).current;
  const windowWidth = window.window.width - 24;
  const width = windowWidth / 2 - 6;
  const [tagSelect, setTagSelect] = useState<TagProps>(tags[0]);

  const fetch = async () => {
    const res = await request().get(`/products?tag=${tagSelect.value}`);
    return res.data;
  };

  const onTagSelect = (v: TagProps) => {
    setTagSelect(v);
  };

  return (
    <Container>
      <AnimatedHeader
        animatedValue={offset}
        tags={tags}
        onTagSelect={onTagSelect}
      />
      <Fetch fetch={fetch} skeletonName="shopListSkeleton">
        {({ res }: { res: ProductProps[] }) => (
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false }
            )}
          >
            <Content>
              <List>
                {res.map((product: ProductProps) => (
                  <TouchableOpacity
                    key={product._id}
                    onPress={() => {
                      navigation.navigate("ProductDetail", {
                        productId: product._id,
                      });
                    }}
                  >
                    <ShopMenuCard
                      image={product.image[0]}
                      label={product.name}
                      price={product.price}
                      style={{
                        width: width,
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </List>
            </Content>
          </ScrollView>
        )}
      </Fetch>
    </Container>
  );
};

const tags = [
  {
    label: "ทั้งหมด",
    value: "all",
  },
  {
    label: "สิ้นค้าใหม่",
    value: "new-product",
  },
  {
    label: "สิ้นค้าขายดี",
    value: "best-sell",
  },
  {
    label: "เสื้อผ้า",
    value: "shirts",
  },
  {
    label: "กางเกง",
    value: "shorts",
  },
  {
    label: "รองเท้า",
    value: "shoes",
  },
  {
    label: "แจ็คเก็ต",
    value: "jackget",
  },
  {
    label: "อุุปกรณ์",
    value: "accessories",
  },
];
