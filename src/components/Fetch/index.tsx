import React, { useState, useEffect } from "react";
import skeletonPlaceholder from "./SkeletonPlaceholder";
import isEmpty from "lodash/isEmpty";
export type skeletonNameProps = keyof typeof skeletonPlaceholder;
import Content from "../Content";
import Text from "../Text";

type Props = {
  children: React.ReactNode;
  fetch: () => Promise<any>;
  skeletonName: skeletonNameProps;
};

export default ({ children, skeletonName, fetch }: Props) => {
  const [isLoad, setIsLoad] = useState(true);
  const [response, setResponse] = useState(null);
  const SkeletonPlaceholder = skeletonPlaceholder[skeletonName];

  useEffect(() => {
    const call = async () => {
      setIsLoad(true);
      const res = await fetch();
      await setResponse(res);
      setIsLoad(false);
    };
    call();
  }, [fetch]);

  if (isLoad) return <SkeletonPlaceholder />;
  if (isEmpty(response))
    return (
      <Content style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>The list is empyt</Text>
      </Content>
    );

  return children({ res: response });
};
