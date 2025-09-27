import api from "./axios";

export const ForgottenPassword = async() => {
  try {
      const res = await api.post("/forgot-password/", data,{
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res
  } catch (error) {
    console.log(error, "error from api-forgotten-password")
  }
}