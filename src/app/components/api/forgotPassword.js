import axios from "axios";
import httpClient from "./axios";

export const ForgottenPassword = async(data) => {
  try {
      const res = await httpClient.post("/api/accounts/forgot-password/", data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res
  } catch (error) {
    console.log(error, "error from api-forgotten-password")
  }
}