import httpClient from "./axios";
export const fetchCategory = async (category) => {
  try {
    const res = await httpClient.get(`api/store/products/all/?category=${category}`,
    );
    return res.data.results;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};
