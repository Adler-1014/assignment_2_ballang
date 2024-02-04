import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth.context";
import { addItemActionCreator } from "../../store/reducers/cart.reducer";

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 200px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  margin: 4px 0;
  font-size: 14px;
`;

const ProductPrice = styled.p`
  margin: 4px 0;
  font-size: 14px;
`;

const ProductSale = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: red;
`;

function ProductListItem({ product }) {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const handleAddToCart = () => {
    if (isLoggedIn) {
      dispatch(addItemActionCreator(product));
      alert("장바구니에 담겼습니다.");
    }
  };

  return (
    <ProductCard>
      {/* Wrap the entire product card with a Link to the product detail page */}
      <Link to={`/products/${product.id}`}>
        <ProductImage src={product.img_i} alt={product.goodsnm} />
        <ProductInfo>
          <ProductTitle>
            {product.brandnm} - {product.goodsnm}
          </ProductTitle>
          <ProductPrice>Price: ${product.price.toLocaleString()}</ProductPrice>
          <ProductSale>Sale: {product.sale_percent}% off</ProductSale>
        </ProductInfo>
        {!isLoggedIn ? (
          <Link to="/sign-in">
            <button>Add to Cart</button>
          </Link>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </Link>
    </ProductCard>
  );
}

export default ProductListItem;
