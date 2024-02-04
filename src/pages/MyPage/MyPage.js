import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNickname } from "../../store/reducers/profile.reducer";
import { removeItemActionCreator } from "../../store/reducers/cart.reducer";
import styled from "styled-components";

// Create styled components
const Section = styled.section`
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function MyPage() {
  const [newNickname, setNewNickname] = useState("");
  const nickname = useSelector((state) => state.profile.nickname);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the current nickname in the input field when the component mounts
    setNewNickname(nickname);
  }, [nickname]);

  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value);
  };

  const handleUpdateClick = () => {
    dispatch(updateNickname(newNickname));
    setNewNickname("");
  };

  return (
    <Section>
      <Heading>닉네임 수정</Heading>
      <Input
        type="text"
        value={newNickname}
        onChange={handleNicknameChange}
        placeholder="새로운 닉네임을 입력하세요"
      />
      <Button onClick={handleUpdateClick}>닉네임을 변경하세요</Button>
    </Section>
  );
}

export default MyPage;
