import React, { useEffect, useState } from "react";
import api from "../../api/api";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/auth.context";
import { addItemActionCreator } from "../../store/reducers/cart.reducer";

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const ProductImage = styled.img`
  width: 50%; /* Set the width to 50% to place it on the left */
  height: 500px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-top: 90px;
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

const ProductCatnm = styled.p`
  margin: 4px 0;
  font-size: 14px;
`;

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (isLoggedIn) {
      dispatch(addItemActionCreator(product));
      alert("장바구니에 담겼습니다.");
    }
  };

  const errorAlter = () => {
    alert("로그인이 필요한 기능입니다.");
  };

  useEffect(() => {
    // Fetch the specific product by its ID
    api.products
      .getProductById(productId)
      .then((response) => {
        setProduct(response); // Set the fetched product data to state
      })
      .catch((error) => {
        console.error("Failed to fetch product details", error);
      });
  }, [productId]);

  if (product === null) return null;
  return (
    <ProductCard>
      <ProductImage src={product.img_i} alt={product.goodsnm} />
      <ProductInfo>
        <ProductTitle>
          {product.brandnm} - {product.goodsnm}
        </ProductTitle>
        <ProductPrice>Price: ${product.price.toLocaleString()}</ProductPrice>
        <ProductSale>Sale: {product.sale_percent}% off</ProductSale>
        <ProductCatnm>
          Categories:
          <ul>
            {product.catnm.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </ProductCatnm>
        {!isLoggedIn ? (
          <Link to="/sign-in">
            <button onClick={errorAlter}>Add to Cart</button>
          </Link>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </ProductInfo>
    </ProductCard>
  );
}

export default ProductDetailPage;
