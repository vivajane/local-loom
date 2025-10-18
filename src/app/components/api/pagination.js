import httpClient from "./axios";

export const getPagination = async () => {
  try {
    const res = await httpClient.get(
      `/api/store/products/all/?page=${page}&limit=${limit}`
    );
    return res;
  } catch (error) {
    console.log("error from api pagiantion", error);
  }
};
