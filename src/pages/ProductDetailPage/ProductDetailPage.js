import React, { useEffect, useState } from "react";
import api from "../../api/api";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

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
      </ProductInfo>
    </ProductCard>
  );
}

export default ProductDetailPage;
