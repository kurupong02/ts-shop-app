import * as React from "react";
import { View as DefaultContent } from "react-native";
import styled from "@emotion/native";

import { useThemeColor, ThemeProps } from "../../utils/useThemeColor";

type ContentProps = ThemeProps & DefaultContent["props"];

const Content = styled(DefaultContent)({
  flex: 1,
  paddingHorizontal: 12,
});

export default (props: ContentProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <Content style={[{ backgroundColor }, style]} {...otherProps} />;
};
