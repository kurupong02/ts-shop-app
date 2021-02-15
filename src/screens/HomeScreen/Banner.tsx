import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-x2-carousel";
import { Image } from "react-native";
import window from "../../utils/getLayout";

type imageObj = {
  image: string;
};

export default () => {
  const [images] = useState([
    {
      image: "https://source.unsplash.com/1024x768/?nature",
    },
    {
      image: "https://source.unsplash.com/1024x768/?nature",
    },
    {
      image: "https://source.unsplash.com/1024x768/?nature",
    },
  ]);

  const renderItem = (data: imageObj, index: number) => (
    <Image
      key={index.toString()}
      source={{ uri: data.image }}
      style={{
        width: window.window.width,
        height: window.window.height * 0.3,
      }}
      resizeMode="cover"
    />
  );

  return (
    <Carousel pagination={Pagination} renderItem={renderItem} data={images} />
  );
};
