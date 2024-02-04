import React from "react";
import styled from "styled-components";

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 8px; /* Reduced margin */
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 200px; /* Set a specific width to make the card smaller */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height to make the image smaller */
  object-fit: cover; /* Add this to keep the aspect ratio */
`;

const ProductInfo = styled.div`
  padding: 10px; /* Reduced padding */
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  margin: 4px 0; /* Reduced margin */
  font-size: 14px; /* Reduced font size */
`;

const ProductPrice = styled.p`
  margin: 4px 0; /* Reduced margin */
  font-size: 14px; /* Reduced font size */
`;

const ProductSale = styled.p`
  margin: 4px 0; /* Reduced margin */
  font-size: 14px; /* Reduced font size */
  color: red;
`;

function ProductListItem({ product }) {
  return (
    <ProductCard>
      <ProductImage src={product.img_i} alt={product.goodsnm} />
      <ProductInfo>
        <ProductTitle>
          {product.brandnm} - {product.goodsnm}
        </ProductTitle>
        <ProductPrice>Price: ${product.price.toLocaleString()}</ProductPrice>
        <ProductSale>Sale: {product.sale_percent}% off</ProductSale>
      </ProductInfo>
    </ProductCard>
  );
}

export default ProductListItem;
