import styled from "styled-components";
import {
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  borderRadius,
  maxWidth
} from "styled-system";

const Box = styled("div")(
  {
    boxSizing: "border-box"
  },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  borderRadius,
  maxWidth
);

export default Box;
