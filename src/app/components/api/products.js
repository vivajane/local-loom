import httpClient from "./axios";

export const getAllProducts = async (
  page = 1,
  limit = 10,
  category = "",
  
) => {
  try {
    let url = `/api/store/products/all/?page=${page}&limit=${limit}`;

  
    if (category) url += `&category=${encodeURIComponent(category)}`;

    // console.log("Final API URL:", url);
    const response = await httpClient.get(url);
    // console.log("✅ API Response:", response.data);
    return response;
  } catch (error) {
    if (error.response) {
      console.error(
        "category error",
        error.response.status,
        error.response.data
      );
    } else {
      console.error(" category request error:", error.message);
    }
    throw error;
  }
};
