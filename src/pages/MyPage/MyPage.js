import React, { useState } from "react";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import { updateNickname } from "../../store/reducers/profile.reducer";
import { removeItemActionCreator } from "../../store/reducers/cart.reducer";
import styled from "styled-components";

function MyPage() {
  const [newNickname, setNewNickname] = useState("");
  const nickname = useSelector((state) => state.profile.nickname);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value);
  };

  const handleUpdateClick = () => {
    dispatch(updateNickname(newNickname));
    setNewNickname("");
  };

  const handleRemoveItem = (itemID) => {
    dispatch(removeItemActionCreator(itemID));
  };
  return (
    <>
      <section>
        <h2> 닉네임 수정</h2>
        <input
          type="text"
          value={newNickname}
          onChange={handleNicknameChange}
          placeholder="새로운 닉네임을 입력하세요"
        ></input>
        <button onClick={handleUpdateClick}>닉네임을 변경하세요</button>
      </section>
    </>
  );
}

export default MyPage;
