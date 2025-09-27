import api from "./axios";

export const login = async (data) => {
    try {
        const response = await api.post(
            "/login/",
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