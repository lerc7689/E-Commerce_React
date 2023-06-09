import { axiosInstance } from "../api/axiosInstance";

const getProductByNameAndCategory = async (title) =>{
    try {
        const res = await axiosInstance("products?title="+ title)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export default getProductByNameAndCategory;