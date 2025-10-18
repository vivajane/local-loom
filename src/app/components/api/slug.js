import httpClient from "./axios";

export const getSlug = async (slug) => {
  try {
    const response = await httpClient.get(`/api/store/products/${slug}/`);
    return response;
  } catch (error) {
    console.log(error, "error from slug");
  }
};
