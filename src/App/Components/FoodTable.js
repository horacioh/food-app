import * as React from "react";
import { DataContext } from "./DataProvider";
import Box from "./Box";
import FoodRow from "./FoodRow";

function FoodTable() {
  return (
    <DataContext.Consumer>
      {({ data, setData }) => (
        <Box>
          {Object.keys(data).map(id => (
            <FoodRow key={id} food={data[id]} id={id} onChange={setData} />
          ))}
        </Box>
      )}
    </DataContext.Consumer>
  );
}

export default FoodTable;
