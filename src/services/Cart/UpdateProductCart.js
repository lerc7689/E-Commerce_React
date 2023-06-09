import { axiosInstance } from "../../api/axiosInstance";

export const UpdateProductCart = async (token, quantity, productId) =>{
    try {
        const body = { quantity};

        await axiosInstance.put(`cart/${productId}`, body, {
            headers: { Authorization: `Bearer ${token}`},
        })
    } catch (error) {
        console.error(error)
    }
}