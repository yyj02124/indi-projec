import { Box, Button, Typography } from "@mui/material";
import GNBLayout from "../layout/GNBLayout";

const MainPage = () => {
  return (
    <GNBLayout>
      <Box>
        MainPage
        <Typography>this is Main Page</Typography>
        <Button variant="contained" href="login">
          go to LoginPage
        </Button>
        <Button variant="outlined" href="check">
          go to CheckPage
        </Button>
      </Box>
    </GNBLayout>
  );
};

export default MainPage;
