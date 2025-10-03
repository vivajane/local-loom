import httpClient from "./axios";

export const signup = async (data) => {
  try {
    const response = await httpClient.post(
      "/api/accounts/register/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    console.log("test", error);
  }
};
