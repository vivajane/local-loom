import axios from "axios";

export const signup = async (data) => {
  try {
    const response = await axios.post(
      "https://localoom-backend.onrender.com/api/accounts/register/",
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
