import { axiosInstance } from "../api/axiosInstance"

const getAllCategories = async () =>{
    try {
        const res = await axiosInstance("categories");
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export default getAllCategories;