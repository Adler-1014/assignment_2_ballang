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
      © {new Date().getFullYear()} 유데미X사람인 취업 부트캠프 교육생 장은수,
      react 실습 과제
    </FooterContainer>
  );
};

export default Footer;
