import axios from "axios";

export const login = async (data) => {
    try {
        const response = await axios.post(
            "https://localoom-backend.onrender.com/api/accounts/login/",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return response;
    } catch (error) {
        console.log("test", error);
    }
}