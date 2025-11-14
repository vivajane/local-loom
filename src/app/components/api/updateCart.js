import httpClient from "./axios";

export const updateCart = async (productId, quantity) => {
  console.log("🟡 Sending to backend:", { productId, quantity });
  try {
    const response = await httpClient.patch("/api/store/cart/update/", {
      product: productId,
      quantity,
    });

    console.log("✅ Added to cart:", response.data);
    return response.data;
  } catch (error) {
    console.log(error, "error from seeCart");
  }
};
