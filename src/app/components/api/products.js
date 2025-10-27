import httpClient from "./axios";

export const getAllProducts = async (page = 1, limit = 10, category = null) => {
  try {
    let url = `/api/store/products/all/?page=${page}&limit=${limit}`;
    if (category) {
      url += `&category_slug=${encodeURIComponent(category)}`;
    }

    const response = await httpClient.get(url);
    return response;
  } catch (error) {
    if (error.response) {
      console.error(
        "❌ category error",
        error.response.status,
        error.response.data
      );
    } else {
      console.error("❌ category request error:", error.message);
    }
    throw error;
  }
};
