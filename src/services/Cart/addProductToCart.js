import { axiosInstance } from "../../api/axiosInstance";

export const addProductToCart = async ({token, quantity, productId}) =>{
    try {
        const body = { quantity, productId};

        await axiosInstance.post("cart", body, {
            headers: { Authorization: `Bearer ${token}`},
        })
    } catch (error) {
        console.error(error)
    }
}