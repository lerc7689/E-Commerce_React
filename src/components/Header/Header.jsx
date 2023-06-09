import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import {useDispatch, useSelector} from "react-redux";
import { reset } from "../../store/Slices/authSlice";
import CartModal from "../CartModal/CartModal";
import { useState } from "react";
const Header = () =>{

    const dispatch = useDispatch()
    const isLogged = useSelector((store)=> store.auth.isLogged)
    const navigate = useNavigate();
    const [isVisibleCart, setIVisibleCart] = useState(false);

    const handleLogOut = () =>{
        dispatch(reset())
        navigate("/login");
    }
    return(
    <>
        <header>
            <Link to="/"  style={{textDecoration:"unset", color:"unset"}} className="headerTitle">
                <p className="headerTitle">E-commerce</p>
            </Link>
            <div className="headerIcons">
              <Link to="/profile"  style={{textDecoration:"unset", color:"unset"}}>
                <div className="userIconContainer">
                        <i className="fa-regular fa-user"></i>
                </div>
              </Link>
              <Link to="/purchases"  style={{textDecoration:"unset", color:"unset"}}>
                <div className="purchseIconContainer">
                    <i className="fa-solid fa-box-archive"></i>
                </div>
              </Link>
                <div className="cartIconContainer" onClick={()=> setIVisibleCart(!isVisibleCart)}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>

                {isLogged && <button onClick={handleLogOut}><i className="fa-solid fa-right-from-bracket "></i></button>}
            </div>
            
            {isVisibleCart && isLogged &&  <CartModal/>}

        </header>
    </>)
}

export default Header;