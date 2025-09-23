import axios from "axios";

export const verifyOtp = async(data) => {
   try {
     const response = await axios.post("https://localoom-backend.onrender.com/api/accounts/verify-otp/ ", data,{
        headers: {
            "Content-Type": "application/json",
        },
    })

    return response
    
   } catch (error) {
    console.log(error, "error from verify")
    
   }
}
