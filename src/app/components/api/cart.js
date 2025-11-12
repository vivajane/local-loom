import httpClient from "./axios";

export const seeCart = async (productId, quantity) => {
  console.log("🟡 Sending to backend:", { productId, quantity });
  try {
    const response = await httpClient.post("/api/store/cart/add/", {
      product: productId,
      quantity,
    });

    console.log("✅ Added to cart:", response.data);
    return response.data;
  } catch (error) {
    console.log(error, "error from seeCart");
  }
};
