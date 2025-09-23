import axios from "axios";

export const resendOtp = async () => {
  try {
    const email = localStorage.getItem("email");

     if (!email) {
      throw new Error("No email found in localStorage");
    }

    const response = await axios.post("https://localoom-backend.onrender.com/api/accounts/resend-signup-otp/", {
      identifier: email,
    });

    return response;
    } catch (error) {
    console.error("Resend OTP error:", error);
  }
};
