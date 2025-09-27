import api from "./axios"
export const getProfile = async(access) =>{
    try {
        const response = api.get("/profile/",data,{
            headers: {
                "authorization": `Bearer ${access}`,
            },

        })
        return response
    } catch (error) {
        
    }
}
