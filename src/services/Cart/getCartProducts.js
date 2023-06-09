import { axiosInstance } from "../../api/axiosInstance"

export const getCartProducts = async (token) =>{
    try {
        const res = await axiosInstance.get("cart", {
            headers: { Authorization: `Bearer ${token}`}
        })

        return res.data;
    } catch (error) {
        console.error(error)
    }
}