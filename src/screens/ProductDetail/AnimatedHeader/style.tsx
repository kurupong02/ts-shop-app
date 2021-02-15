import styled from "@emotion/native";
import { View } from "react-native";
import DefaultContent from "../../../components/Content";

const Header = styled(View)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  backgroundColor: "transparent",
});

const Content = styled(DefaultContent)({
  backgroundColor: "transparent",
  zIndex: 20,
});

export { Header, Content };
