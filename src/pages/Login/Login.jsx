import { Navigate, useLocation } from "react-router-dom";
import LoginForm from "../../components/Login/loginForm/LoginForm";
import { startSessionThunk } from "../../store/Slices/authSlice";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";

const Login = () =>{
    const isLogged = useSelector((store)=> store.auth.isLogged)
    const dispatch = useDispatch()
    const location = useLocation()

    const from = location.state?.from;

    const handleLogin = async (data) =>{
        dispatch(startSessionThunk(data));
    }
       
    return (
    <>
        <div className="loginContainer">
            <div className="loginBox">
                <p className="loginWelcomeMessage">Welcome! Enter your email and password to continue</p>
                <div className="testDataContainer">
                    <h4>Test data</h4>
                    <p><i className="fa-solid fa-envelope"></i> lerc7689@hotmail.com</p>
                    <p><i className="fa-solid fa-lock"></i>1234567890</p>
                </div>
                <LoginForm onLogin={handleLogin}/>
            </div>
            {isLogged && <Navigate to={from ?? "/"}/>}
        </div>
    </>)
}

export default Login;