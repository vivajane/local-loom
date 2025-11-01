import httpClient from "./axios";

export const getAllProducts = async (
  page = 1,
  search = "",
  limit = 10,
  category = "",
  sort_by = "price",
  sort_order = "asc"
) => {
  try {
    let url = `/api/store/products/all/?page=${page}&limit=${limit}`;

    if (search) url += `&search=${encodeURIComponent(search)}`;
    if (sort_by) url += `&sort_by=${sort_by}`;
    if (sort_order) url += `&sort_order=${sort_order}`;
    if (category) url += `&category=${encodeURIComponent(category)}`;

    console.log("🚀 Final API URL:", url);
    const response = await httpClient.get(url);
    console.log("✅ API Response:", response.data);
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
