import "./Profile.css";

const Profile = () =>{
    return(
    <>
        <div className="profileContainer">
            <div className="profileCard">
                <h1 className="profileName">Luis Eduardo Ramirez Castellanos</h1>
                <h3><i class="fa-solid fa-location-dot profileIcon"></i> Adress</h3>
                <p>C# Juan pablo duarte #73 sector 30 de mayo</p>
                <h3> <i class="fa-solid fa-phone profileIcon"></i> Phone</h3>
                <p>829-721-3784</p>
                <h3> <i class="fa-solid fa-at profileIcon"></i> Correo</h3>
                <p>lerc7689@hotmail.com</p>
            </div>
        </div>
    </>)
}

export default Profile;