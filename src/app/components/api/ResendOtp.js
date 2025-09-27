import api from "./axios";

export const resendOtp = async () => {
  try {
    const email = localStorage.getItem("email");

     if (!email) {
      throw new Error("No email found in localStorage");
    }

    const response = await api.post("/resend-signup-otp/", {
      identifier: email,
    });

    return response;
    } catch (error) {
    console.error("Resend OTP error:", error);
  }
};
