import styled from "styled-components";
import Box from "./Box";
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
} from "styled-system";

const Text = styled(Box)(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
);

Text.defaultProps = {
  fontFamily: "sans"
};

export default Text;
