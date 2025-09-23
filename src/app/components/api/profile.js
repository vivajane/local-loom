import axios from "axios";
export const getProfile = async(access) =>{
    try {
        const response = axios.get("https://localoom-backend.onrender.com/api/accounts/profile",data,{
            headers: {
                "authorization": `Bearer ${access}`,
            },

        })
    } catch (error) {
        
    }
}
