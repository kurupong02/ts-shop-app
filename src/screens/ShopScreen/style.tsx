import styled from "@emotion/native";
import DefaultContent from "../../components/Content";

const Content = styled(DefaultContent)({
  marginVertical: 20,
});

const List = styled.View({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

export { Content, List };
