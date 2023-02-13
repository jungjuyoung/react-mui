import { Box } from "@mui/system";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor="orange"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
