import React from "react";
import styled from "styled-components";

// Styled component for the footer
const FooterContainer = styled.footer`
  background-color: #f0f0f0; // Light gray background
  color: #333; // Dark text color
  text-align: center;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Your Site Name. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
