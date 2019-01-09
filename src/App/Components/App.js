import * as React from "react";
import Section from "./Section";
import Heading from "./Heading";
import FoodTable from "./FoodTable";
import RawData from './RawData'
import Footer from "./Footer";

function App() {
  return (
    <Section>
      <Heading textAlign="center" m={4} fontSize={5} as="h1">
        Hello Food App
      </Heading>
      <FoodTable />
      <RawData />
      <Footer />
    </Section>
  );
}

export default App;
