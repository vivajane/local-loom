import api from "./axios";

export const login = async (data) => {
  try {
    const response = await api.post("/login/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    if (error.response) {
      console.error("❌ Login API error:", error.response.status, error.response.data);
    } else {
      console.error("❌ Login API request error:", error.message);
    }
    throw error;
  }
};
