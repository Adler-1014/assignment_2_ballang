import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Layout = styled.div`
  background-color: white;
  color: black;
  min-height: 100%;
  padding-bottom: 4rem;
`;

function DefaultLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default DefaultLayout;
