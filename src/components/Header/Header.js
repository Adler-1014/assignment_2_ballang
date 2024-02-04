import React from "react";
import { useAuth } from "../../contexts/auth.context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderContainer = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 60px;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 32px;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    margin-top: 30px;
  }

  li a,
  li button {
    text-decoration: none;
    color: #333;
    font-weight: normal;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const nickname = useSelector((state) => state.profile.nickname);

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>BALLANG</Logo>
      </Link>

      <Nav>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                {nickname && <span>Welcome, {nickname}! </span>}
                <Link to="/my-page">마이 페이지</Link>
              </li>
              <li>
                <button onClick={logOut}>로그아웃</button>
              </li>
              <li>
                <Link to="/cart">장바구니</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="sign-in">로그인하기</Link>
              </li>
              <li>
                <Link to="/sign-in">장바구니</Link>
              </li>
            </>
          )}
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
