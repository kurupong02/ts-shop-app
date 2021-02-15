import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import isEmpty from "lodash/isEmpty";

import Tag from "../Tag";
import { useThemeColor, ThemeProps } from "../../utils/useThemeColor";
import { TagProps } from "../../constants/types";

type Props = {
  tags: TagProps[];
  onSelect?: (tag: TagProps) => void;
};

type TagGroupProps = ThemeProps & Props & View["props"];

export default (props: TagGroupProps) => {
  const { lightColor, darkColor, tags, onSelect, style } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  const handleClick = (tag: TagProps, index: number) => {
    setSelectIndex(index);
    if (onSelect) {
      onSelect(tag);
    }
  };

  if (isEmpty(tags)) return null;

  return (
    <View style={[style]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{
          flexDirection: "row",
        }}
      >
        {tags.map((tag, index) => {
          const isSelect = index === selectIndex;

          const backgroundColor = useThemeColor(
            { light: lightColor, dark: darkColor },
            isSelect ? "tagBgSelected" : "tagBgUnSelected"
          );

          const color = useThemeColor(
            { light: lightColor, dark: darkColor },
            isSelect ? "tagTextSelected" : "tagTextUnSelected"
          );

          return (
            <TouchableOpacity
              key={index.toString()}
              onPress={() => handleClick(tag, index)}
            >
              <Tag {...tag} bgColor={backgroundColor} textColor={color} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
