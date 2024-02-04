import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemActionCreator } from "../../store/reducers/cart.reducer";
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

function CartPage() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (itemID) => {
    dispatch(removeItemActionCreator(itemID));
  };

  // const handleQuantityChange = (itemId, quantity) => {
  //   // Assuming you have an action creator for updating the quantity
  //   dispatch(updateItemQuantityActionCreator({ itemId, quantity }));
  // };

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
              {/* <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                min="1"
              /> */}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </ItemDetails>
        </CartItem>
      ))}
    </section>
  );
}

export default CartPage;
