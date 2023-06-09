import { axiosInstance } from "../api/axiosInstance"

const userLogin = async (data) =>{
    try {
        const res = await axiosInstance.post("/users/login", data)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export default userLogin;