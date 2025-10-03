import httpClient from "./axios";
export const getAllProducts = async (data) => {
  try {
    const response = await httpClient.get("/api/store/products/all/", data);
    return response;
  } catch (error) {
    if (error.response) {
      console.error(
        "❌ Login API error:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error("❌ Login API request error:", error.message);
    }
    throw error;
  }
};

