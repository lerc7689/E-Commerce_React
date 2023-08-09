import { axiosInstance } from "../../api/axiosInstance"

const getAllProducts = async () =>{
    try {
        const res = await axiosInstance("products");
        
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export default getAllProducts;