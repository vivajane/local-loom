import httpClient from "./axios";

export const seeCart = async (productId) => {
    try {
        const response = await httpClient.post("/api/store/cart/add/", { productId});
        return response.data
    } catch (error) {
        console.log(error, "error from seeCart");
    }
}
