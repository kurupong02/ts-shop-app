import * as React from "react";
import { View, Image } from "react-native";
import styled from "@emotion/native";

import Text from "../Text";
import { useThemeColor, ThemeProps } from "../../utils/useThemeColor";

type Props = {
  image: string;
  label?: string;
  price?: number;
};

type ShopMenuCardProps = ThemeProps & View["props"] & Props;

const Card = styled(View)({
  marginBottom: 10,
});

const Row = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 10,
  width: "100%",
});

export default (props: ShopMenuCardProps) => {
  const { style, lightColor, darkColor, image, price, label } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <Card style={[{ backgroundColor }, style]}>
      <Image
        source={{ uri: image }}
        style={{ height: 200, borderRadius: 10 }}
      />
      <Row>
        <Text style={{ fontWeight: "bold", flex: 1 }} numberOfLines={1}>
          {label}
        </Text>
        <Text style={{ fontWeight: "bold" }}>{`฿${price}`}</Text>
      </Row>
    </Card>
  );
};
