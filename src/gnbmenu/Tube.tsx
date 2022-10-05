import { Box } from "@mui/material";
import React from "react";
import MockContents from "../mock/MockContents";

const content = (count: number) => {
  const array = [];
  for (let i = 0; i <= count; i++) {
    array.push(<MockContents />);
  }
  return array;
};

const Tube = () => {
  return (
    <Box display="flex" justifyContent="end">
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          justifyContent: "start",
        }}
      >
        {content(10)}
      </Box>
    </Box>
  );
};

export default Tube;
