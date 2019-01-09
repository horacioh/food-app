import * as React from "react";
import styled from "styled-components";
import Box from "./Box";
import Flex from "./Flex";
import Text from "./Text";
import Toggle from "./Toggle";

const Wrapper = styled(Flex)`
  transition: transform ease 0.5s;
  transform: translateX(${({ isDelicious }) => (isDelicious ? "30px" : 0)});
  position: relative;
  overflow: hidden;

  &:before {
    transition: opacity ease 0.25s;
    opacity: ${({ isHealthy }) => (isHealthy ? 1 : 0)};
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.green};
    z-index: -1;
  }
`;

const Label = styled(Text)`
  color: ${({ isHealthy }) => (isHealthy ? "white" : "black")};
`;

function FoodRow({ food, id, onChange }) {
  return (
    <Wrapper
      width={2 / 3}
      key={id}
      bg="gray"
      p={2}
      my={2}
      mx={"auto"}
      alignItems="center"
      isDelicious={food.isDelicious}
      isHealthy={food.isHealthy}
      borderRadius={2}
      boxShadow="small"
    >
      <Box mr={3} width={1}>
        <Label isHealthy={food.isHealthy} fontSize={4}>
          {food.label}
        </Label>
      </Box>
      <Box>
        <Toggle
          value={food.isDelicious}
          onChange={onChange}
          id={id}
          keyValue="isDelicious"
        >
          delicious?
        </Toggle>
      </Box>
      <Box>
        <Toggle
          value={food.isHealthy}
          onChange={onChange}
          id={id}
          keyValue="isHealthy"
        >
          healthy?
        </Toggle>
      </Box>
    </Wrapper>
  );
}

export default FoodRow;
