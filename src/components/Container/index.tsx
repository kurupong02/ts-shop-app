import * as React from "react";
import { View as DefaultContainer } from "react-native";
import styled from "@emotion/native";

import { useThemeColor, ThemeProps } from "../../utils/useThemeColor";

type ContainerProps = ThemeProps & DefaultContainer["props"];

const Container = styled(DefaultContainer)({
  flex: 1,
});

export default (props: ContainerProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <Container style={[{ backgroundColor }, style]} {...otherProps} />;
};
