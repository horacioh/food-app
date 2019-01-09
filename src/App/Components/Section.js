import React from 'react'
import Box from './Box'
import Flex from './Flex';

function Section({children}) {
  return (
    <Flex justifyContent="center">
      <Box maxWidth="small" width={1}>{children}</Box>
    </Flex>
  )
}

export default Section
