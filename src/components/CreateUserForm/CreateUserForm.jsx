import createUser from "../../services/User/createUser";
import "./CreateUserForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUserForm = () =>{

    const [isPaswordVisible, setIsPaswordVisible] = useState(false);
    const [formData, setFormData] = useState({firstName: "", lastName: "", phone: "", email: "", password: ""})
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        const newFormData = {...formData, [name]:value}
        setFormData(newFormData)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.password) return;
        await createUser(formData);
        navigate('/login')

    }

    return(
    <>
        <div className="createUserFormContainer">
            <form onSubmit={handleSubmit}>
                <div className="firstNameInputContainer">
                    <label htmlFor="lastName">First name</label>
                    <input 
                    type="firstName" 
                    id="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange}
                    name="firstName"
                    />
                </div>
                <div className="lastNameInputContainer">
                    <label htmlFor="lastName">Last name</label>
                    <input 
                    type="lastName" 
                    id="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange}
                    name="lastName"
                    />
                </div>
                <div className="phoneInputContainer">
                    <label htmlFor="phone">Phone</label>
                    <input 
                    type="phone" 
                    id="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    name="phone"
                    />
                </div>
                <div className="emailInputContainer">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    name="email"
                    />
                </div>
                <div className="passwordInputContainer">
                    <label htmlFor="password">Password</label>
                    <input 
                    type={isPaswordVisible? "text": "password" } 
                    id="password" 
                    value={formData.password} 
                    onChange={handleChange}
                    name="password"
                    />
                    <button type="button">
                        <i className="fa-solid fa-eye" 
                            onClick={() => setIsPaswordVisible(!isPaswordVisible)} 
                            style={{display:isPaswordVisible&&"none"}}>
                        </i>
                        <i className="fa-solid fa-eye-slash" 
                            onClick={() => setIsPaswordVisible(!isPaswordVisible)} 
                            style={{display:!isPaswordVisible && "none"}}>
                        </i>
                    </button>
                </div>
                <div className="buttonInputContainer">
                    <button type="submit">Create user</button>
                </div>
            </form>
        </div>
    </>)
}

export default CreateUserForm;