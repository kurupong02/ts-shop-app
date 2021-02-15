import { type } from "os";
import * as React from "react";
import { Text as DefaultText } from "react-native";
import {
  useThemeColor,
  ThemeProps,
  ColorNameProps,
} from "../../utils/useThemeColor";

type Props = {
  note?: boolean;
  primary?: boolean;
};

type TextProps = Props & ThemeProps & DefaultText["props"];

function getColorClassname(params: Props): ColorNameProps {
  const { primary, note } = params;
  if (primary) return "textPrimary";
  if (note) return "textNote";
  return "textDefault";
}

export default (props: TextProps) => {
  const { style, lightColor, darkColor, note, primary, ...otherProps } = props;

  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    getColorClassname({ note, primary })
  );

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};
