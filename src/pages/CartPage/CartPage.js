import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemActionCreator,
  updateQuantityActionCreator,
} from "../../store/reducers/cart.reducer";
import styled from "styled-components";

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ApplyButton = styled.button`
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

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [editedQuantities, setEditedQuantities] = useState({});

  const handleRemoveItem = (itemID) => {
    dispatch(removeItemActionCreator(itemID));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setEditedQuantities({
      ...editedQuantities,
      [itemId]: newQuantity,
    });
  };

  const handleApplyQuantity = (itemId) => {
    const newQuantity = editedQuantities[itemId];
    dispatch(updateQuantityActionCreator(itemId, newQuantity));
    setEditedQuantities((prevEditedQuantities) => {
      const updatedQuantities = { ...prevEditedQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
    alert("수정되었습니다");
  };

  return (
    <section>
      <h2>My Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <ItemImage src={item.img_i} alt={item.goodsnm} />
          <ItemDetails>
            <span>{item.goodsnm}</span>
            <span>${item.price.toLocaleString()}</span>
            <div>
              <input
                type="number"
                value={editedQuantities[item.id] || item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                min="1"
              />
              {editedQuantities[item.id] && (
                <ApplyButton onClick={() => handleApplyQuantity(item.id)}>
                  Apply
                </ApplyButton>
              )}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </ItemDetails>
        </CartItem>
      ))}
    </section>
  );
}

export default CartPage;
