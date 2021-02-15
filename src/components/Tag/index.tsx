import * as React from "react";
import { View as DefaultView } from "react-native";
import styled from "@emotion/native";
import Text from "../Text";

import { useThemeColor, ThemeProps } from "../../utils/useThemeColor";

type Props = {
  label: string;
  bgColor?: string;
  textColor?: string;
  isSelect?: boolean;
};

type ViewProps = ThemeProps & DefaultView["props"] & Props;

const Tag = styled(DefaultView)({
  marginRight: 8,
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 6,
});

export default (props: ViewProps) => {
  const {
    style,
    lightColor,
    darkColor,
    label,
    isSelect,
    bgColor,
    textColor,
  } = props;

  const backgroundColor = bgColor
    ? bgColor
    : useThemeColor(
        { light: lightColor, dark: darkColor },
        isSelect ? "tagBgSelected" : "tagBgUnSelected"
      );

  const color = textColor
    ? textColor
    : useThemeColor(
        { light: lightColor, dark: darkColor },
        isSelect ? "tagTextSelected" : "tagTextUnSelected"
      );

  return (
    <Tag style={[{ backgroundColor }, style]}>
      <Text style={[{ color }, { fontWeight: "bold" }]}>{label}</Text>
    </Tag>
  );
};
