import httpClient from "./axios"

export const verifyOtp = async(data) => {
   try {
     const response = await httpClient.post("/api/accounts/verify-otp/", data,{
        headers: {
            "Content-Type": "application/json",
        },
    })

    return response
    
   } catch (error) {
    console.log(error, "error from verify")
    
   }
}
