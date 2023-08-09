import { axiosInstance } from "../../api/axiosInstance"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const createUser = async (data) =>{
    try {
        const res = await axiosInstance.post("/users", data)

        toast.success("User created successfully!", {
            position: toast.POSITION.TOP_CENTER
          });
                  
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export default createUser;