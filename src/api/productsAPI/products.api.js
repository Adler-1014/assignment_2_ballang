const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getProducts = async () => {
  const endpoint =
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products";
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

const getProductById = async (productId) => {
  const endpoint = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products/${productId}`;
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

const productsAPI = {
  getProducts,
  getProductById,
};

export default productsAPI;
