import httpClient from "./axios";

export const viewCart = async (cart_items) => {
  console.log("🟡 Sending to backend:", { productId, quantity });
  try {
    const response = await httpClient.post("/api/store/cart/update/");

    console.log("✅ Added to cart:", response.data);
    return response.data;
  } catch (error) {
    console.log(error, "error from seeCart");
  }
};
