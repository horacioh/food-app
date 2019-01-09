import * as React from "react";
import Box from "./Box";
import Heading from "./Heading";
import FoodTable from "./FoodTable";
import Footer from "./Footer";

function App() {
  return (
    <Box>
      <Heading textAlign="center" m={4} fontSize={5} as="h1">
        Hello Food App
      </Heading>
      <FoodTable />
      <Footer />
    </Box>
  );
}

export default App;
