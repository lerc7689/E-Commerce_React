import { axiosInstance } from "../../api/axiosInstance";

export const DeleteCartProduct = async (token, productId) =>{
    try {
        await axiosInstance.delete(`cart/${productId}`, {
            headers: { Authorization: `Bearer ${token}`},
        })
    } catch (error) {
        console.error(error)
    }
}