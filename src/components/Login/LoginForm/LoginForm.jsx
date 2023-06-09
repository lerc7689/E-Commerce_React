import { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({onLogin}) =>{
    const [isPaswordVisible, setIsPaswordVisible] = useState(false);
    const [formData, setFormData] = useState({email: "", password: ""})

    const handleChange = (e) =>{
        const {name, value} = e.target;
        const newFormData = {...formData, [name]:value}
        setFormData(newFormData)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!formData.email || !formData.password) return;
        onLogin(formData)

    }
    return (
    <>
        <div className="loginFormContainer">
            <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </>)
}

export default LoginForm;