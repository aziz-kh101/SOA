import React from "react";
import CenterContainer from "../@Components/CenterContainer";
import NotFoundImage from "../images/not-found.png";

function NotFound(props) {
  return (
    <CenterContainer>
      <img
        style={{ maxWidth: "500px", width: "100%" }}
        src={NotFoundImage}
        alt="not found"
      />
    </CenterContainer>
  );
}

export default NotFound;
