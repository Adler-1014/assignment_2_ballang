import React from "react";
import styled from "styled-components";

const StyledPage = styled.main`
  max-width: ${(props) => (props.fullWidth ? "unset" : "auto")};
  padding: ${(props) => (props.fullWidth ? "0" : "initial")};
`;

function Page({ fullWidth, children }) {
  return <StyledPage fullWidth={fullWidth}>{children}</StyledPage>;
}

export default Page;
