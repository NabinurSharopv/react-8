export const getProducts = async () => {
  const res = await fetch("https://your-api.com/products");
  return await res.json();
};
