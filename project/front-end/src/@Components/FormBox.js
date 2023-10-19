import { Box } from "@mui/material";
import React from "react";

function FormBox({ children }) {
  return (
    <Box
      sx={{
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
        display: "grid",
        gridColumn: 1,
        gap: "1rem",
      }}
    >
      {children}
    </Box>
  );
}

export default React.memo(FormBox);
