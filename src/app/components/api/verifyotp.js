import api from "./axios"

export const verifyOtp = async(data) => {
   try {
     const response = await api.post("/verify-otp/", data,{
        headers: {
            "Content-Type": "application/json",
        },
    })

    return response
    
   } catch (error) {
    console.log(error, "error from verify")
    
   }
}
