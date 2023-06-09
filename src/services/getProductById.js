import { axiosInstance } from "../api/axiosInstance";

const getProductById = async (id) =>{
    try {
        const res = await axiosInstance(`products/${id}`)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export default getProductById;