import * as React from "react";
import { View, Text } from "react-native";
import styled from "@emotion/native";
import { Feather } from "@expo/vector-icons";
import Button from "../Button";
type iconsProps = React.ComponentProps<typeof Feather>["name"];

type Props = {
  iconName?: iconsProps;
  label?: string;
};

const Footer = styled(View)({
  marginHorizontal: 12,
  paddingBottom: 12,
});

export default (props: Props) => {
  const { label, iconName } = props;

  return (
    <Footer>
      <Button
        primary
        style={{ alignItems: "center", padding: 14 }}
        iconName={iconName}
        iconColor="#fff"
      >
        {label && <Text style={{ color: "#fff", fontSize: 18 }}>{label}</Text>}
      </Button>
    </Footer>
  );
};
