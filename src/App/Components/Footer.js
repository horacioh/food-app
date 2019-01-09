import * as React from 'react';
import Box from './Box';
import Heading from './Heading';
import Text from './Text';

function Footer() {
  return (
    <Box>
      <Heading textAlign="center" m={4} fontSize={2} as="h3">
        developed by Horacio Herrera
      </Heading>
      <Text textAlign="center">
        <a href="https://github.com/horacioh" target="_blank" rel="noopener noreferrer">
          github
        </a>
      </Text>
      <Text textAlign="center">
        <a href="https://twitter.com/hhg2288" target="_blank" rel="noopener noreferrer">
          twitter
        </a>
      </Text>
    </Box>
  );
}

export default Footer;
