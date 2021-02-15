import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import window from "../../../utils/getLayout";
import Content from "../../Content";

export default () => {
  const windowWidth = window.window.width / 2 - 24;

  const card = () => {
    return (
      <SkeletonPlaceholder.Item marginBottom={20}>
        <SkeletonPlaceholder.Item
          width={windowWidth}
          height={200}
          borderRadius={4}
        />
        <SkeletonPlaceholder.Item
          width={120}
          height={20}
          borderRadius={4}
          marginTop={10}
        />
      </SkeletonPlaceholder.Item>
    );
  };

  const Row = () => {
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          justifyContent="space-between"
        >
          {card()}
          {card()}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    );
  };

  return (
    <Content style={{ marginVertical: 20 }}>
      <Row />
      <Row />
      <Row />
    </Content>
  );
};
