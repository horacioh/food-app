import styled from "styled-components";
import {
  flexWrap,
  flexDirection,
  justifyContent,
  alignItems
} from "styled-system";
import Box from "./Box";

const Flex = styled(Box)(
  {
    display: "flex"
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

export default Flex;
