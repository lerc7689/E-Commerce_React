import "./Profile.css";
import {useDispatch, useSelector} from "react-redux";

const Profile = () =>{

const userLogged = useSelector((store)=> store.auth)
console.log(userLogged)
    return(
    <>
        <div className="profileContainer">
            <div className="profileCard">
                <h1 className="profileName">{userLogged.fullName}</h1>
                <h3> <i class="fa-solid fa-at profileIcon"></i> Correo</h3>
                <p>{userLogged.email}</p>
            </div>
        </div>
    </>)
}

export default Profile;