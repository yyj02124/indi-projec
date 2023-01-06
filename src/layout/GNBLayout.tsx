import { Box, Link, Stack } from "@mui/material";
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
        <Link href="/jsprac" underline="none" sx={{ color: "black" }}>
          jsPrac1
        </Link>
        <Link href="/tube" underline="hover" sx={{ color: "red" }}>
          TUBE
        </Link>
        <Link href="/landing" underline="none" sx={{ color: "black" }}>
          LandingPage
        </Link>
        <Box>Menu4</Box>
        <Box>Menu5</Box>
      </Stack>
      {children}
    </>
  );
};

export default GNBLayout;
