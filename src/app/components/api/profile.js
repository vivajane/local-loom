import httpClient from "./axios"
export const getProfile = async(access) =>{
    try {
        const response = httpClient.get("/api/accounts/profile/",{
            headers: {
                "authorization": `Bearer ${access}`,
            },

        })
        return response
    } catch (error) {
        
    }
}
