import { Box, Stack } from "@mui/material";
import React from "react";

interface props {
  children: React.ReactNode;
}

const GNBLayout = ({ children }: props) => {
  return (
    <>
      <Box>GNBLayout</Box>
      <Stack
        direction="row"
        spacing="50px"
        position="sticky"
        top="0px"
        sx={{ height: "50px", borderBottom: "1px solid black" }}
      >
        <Box>Menu1</Box>
        <Box>Menu2</Box>
        <Box>Menu3</Box>
        <Box>Menu4</Box>
        <Box>Menu5</Box>
      </Stack>
      {children}
    </>
  );
};

export default GNBLayout;
