import api from "./axios";

export const signup = async (data) => {
  try {
    const response = await api.post(
      "/register/",
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
