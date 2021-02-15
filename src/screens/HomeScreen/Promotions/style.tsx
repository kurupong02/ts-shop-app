import styled from "@emotion/native";
import { Image as DefaultImage, View } from "react-native";

import DefaultContent from "../../../components/Content";
import DefaultText from "../../../components/Text";

type ItemBoxProps = {
  width: number;
};

const Content = styled(DefaultContent)({
  borderColor: "#e6e6e6",
  borderTopWidth: 1,
  paddingVertical: 20,
});

const Title = styled(DefaultText)({
  fontWeight: "bold",
  fontSize: 18,
});

const Image = styled(DefaultImage)({
  height: 150,
  borderRadius: 10,
});

const List = styled.View({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const ItemBox = styled.View<ItemBoxProps>`
  margin-vertical: 10px;
  width: ${({ width }) => width};
`;

const ItemTitle = styled(DefaultText)({
  fontWeight: "bold",
});

export { Content, Title, Image, ItemBox, ItemTitle, List };
