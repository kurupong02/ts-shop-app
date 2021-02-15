import React from "react";
import { Content, Image, ItemBox, ItemTitle, Title, List } from "./style";
import window from "../../../utils/getLayout";

interface image {
  image: string;
}

interface Props {
  images: image[];
  title?: string;
  row?: number;
}

const Promotions: React.FC<Props> = ({ images, title, row = 1 }) => {
  const windowWidth = window.window.width - 24;
  const width = row === 1 ? windowWidth : windowWidth / 2 - 6;
  return (
    <Content>
      {title && <Title>{title}</Title>}
      <List>
        {images.map((image, index) => {
          return (
            <ItemBox width={width} key={index.toString()}>
              <Image source={{ uri: image.image }} resizeMode="cover" />
              <ItemTitle>
                Doing what you like will always keep you happy . .
              </ItemTitle>
            </ItemBox>
          );
        })}
      </List>
    </Content>
  );
};

export default Promotions;
