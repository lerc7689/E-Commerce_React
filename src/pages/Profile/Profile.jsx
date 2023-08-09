import "./Profile.css";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../../store/Slices/authSlice";
import profilePhoto from "../../assets/img/profile.png"

const Profile = () =>{

const userLogged = useSelector((store)=> store.auth)
const dispatch = useDispatch()
const navigate = useNavigate();

const handleLogOut = () =>{
    dispatch(reset())
    navigate("/login");
}
    return(
    <>
        <div className="profileContainer">
            <div className="profileCard">
                <img src={profilePhoto} alt="" />
                <h1 className="profileName">{userLogged.fullName}</h1>
                <h3> <i class="fa-solid fa-at profileIcon"></i> Correo</h3>
                <p>{userLogged.email}</p>
                <button className="profileLogout" onClick={handleLogOut}>Logout</button>
            </div>
        </div>
    </>)
}

export default Profile;