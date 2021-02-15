import styled from "@emotion/native";
import { View } from "react-native";
import DefaultContent from "../../../components/Content";

const Header = styled(View)({
  backgroundColor: "#fff",
  shadowColor: "#000",
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
});

const Content = styled(DefaultContent)({});

const ButtonGroupRight = styled(View)({
  flexDirection: "row",
  position: "absolute",
  right: 0,
});

export { Header, Content, ButtonGroupRight };
