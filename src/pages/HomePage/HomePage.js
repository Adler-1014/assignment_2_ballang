import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import ProductListItem from "../../components/ProductListItem";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.products
      .getProducts("")
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error("Failed to fetch products", error);
      });
  }, []);

  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ProductsGrid>
  );
}

export default HomePage;
