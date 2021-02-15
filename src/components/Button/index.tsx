import * as React from "react";
import { View as DefaultView, TouchableOpacity } from "react-native";
import styled from "@emotion/native";
import { Feather } from "@expo/vector-icons";

import {
  useThemeColor,
  ThemeProps,
  ColorNameProps,
} from "../../utils/useThemeColor";

type iconsProps = React.ComponentProps<typeof Feather>["name"];

type Props = {
  circle?: boolean;
  iconName?: iconsProps;
  primary?: boolean;
  border?: boolean;
  iconColor?: string;
};

type ContentProps = ThemeProps &
  DefaultView["props"] &
  TouchableOpacity["props"] &
  Props;

const Button = styled(DefaultView)<Props>`
  border-color: #bdbdbd;
  border-width: ${({ border }) => (border ? "1px" : "0px")};
  padding: 8px;
  border-radius: ${({ circle }) => (circle ? "20px" : "8px")};
  flex-direction: row;
  justify-content: center;
`;

function getBackgroundColorClassname(params: Props): ColorNameProps {
  const { primary } = params;
  if (primary) return "bottonbackgroundPrimary";
  return "background";
}

export default (props: ContentProps) => {
  const {
    style,
    lightColor,
    darkColor,
    onPress,
    circle,
    border,
    iconName,
    primary,
    iconColor = "#000",
    children,
  } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    getBackgroundColorClassname({ primary })
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <Button
        style={[{ backgroundColor }, style]}
        circle={circle}
        border={border}
      >
        {iconName && <Feather name={iconName} size={16} color={iconColor} />}
        {children && children}
      </Button>
    </TouchableOpacity>
  );
};
