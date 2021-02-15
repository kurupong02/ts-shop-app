import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ColorNameProps = keyof typeof Colors.light &
  keyof typeof Colors.dark;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: ColorNameProps
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
