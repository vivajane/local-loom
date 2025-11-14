import httpClient from "./axios";

export const removeCart = async () => {
  console.log("🟡 Sending to backend:", { productId, quantity });
  try {
    const response = await httpClient.post("/api/store/cart/remove/", {
      product: productId,
      quantity,
    });

    console.log("✅ Added to cart:", response.data);
    return response.data;
  } catch (error) {
    console.log(error, "error from seeCart");
  }
};
