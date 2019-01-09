import * as React from "react";
import styled from "styled-components";
import Flex from "./Flex";

const ToggleWrapper = styled(Flex)`
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

ToggleWrapper.defaultProps = {
  fontFamily: "sans",
  as: "button",
  fontSize: 2,
  p: 2,
  ml: 3,
  bg: "white",
  borderRadius: 2
};

function Toggle({ id, keyValue, value, onChange, children }) {
  return (
    <ToggleWrapper
      type="button"
      aria-pressed={value}
      onClick={e =>
        onChange({
          id,
          key: keyValue
        })
      }
    >
      {`${value ? "👍" : "👎"}${children}`}
    </ToggleWrapper>
  );
}

export default Toggle;
