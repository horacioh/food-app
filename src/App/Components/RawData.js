import React, { useState } from "react";
import Box from "./Box";
import { DataContext } from "./DataProvider";

function RawData() {
  const [show, setShow] = useState(false);

  return (
    <Box p={2} bg="gray" m={3}>
      <button type="button" onClick={() => setShow(!show)}>
        Toggle Data
      </button>
      {show ? (
        <DataContext.Consumer>
          {({ data }) => (
            <pre>
              <code>{JSON.stringify(data, null, 4)}</code>
            </pre>
          )}
        </DataContext.Consumer>
      ) : null}
    </Box>
  );
}

export default RawData;
