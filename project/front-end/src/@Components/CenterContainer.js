import { Container } from "@mui/system";
import React from "react";

function CenterContainer({ children }) {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
    >
      {children}
    </Container>
  );
}

export default React.memo(CenterContainer);
