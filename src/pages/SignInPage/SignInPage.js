import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Input = styled.input`
  height: 52px;
  border: 1px solid white;
  border-radius: 8px;
  padding: 0 16px;
`;

const Button = styled.button`
  height: 52px;
  background-color: wheat;
`;

function SignInPage() {
  const { isLoggedIn, signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    if (!username || !password)
      return alert("아이디 또는 비밀번호를 입력해주세요");

    if (username === "udemy" && password === "udemy") {
      signIn();
      navigate("/");
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <div> 로그인 성공</div>
      ) : (
        <Form>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력해주세요"
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
          />

          <Button onClick={handleClickSignIn}>로그인하기</Button>
        </Form>
      )}
    </div>
  );
}

export default SignInPage;
