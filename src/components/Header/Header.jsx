import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import {useDispatch, useSelector} from "react-redux";
import { reset } from "../../store/Slices/authSlice";
import CartModal from "../CartModal/CartModal";
import { useEffect, useState } from "react";
import { getCartProducts } from "../../services/Cart/getCartProducts";
const Header = () =>{

    const dispatch = useDispatch()
    const isLogged = useSelector((store)=> store.auth.isLogged)
    const token = useSelector((store)=> store.auth.token)
    const [cartProducts, setcartProducts] = useState({});

    const loadCartQuantity =  async () =>{
        const cartProductsData = await getCartProducts(token)
        setcartProducts(cartProductsData)   
    }

    const navigate = useNavigate();
    const [isVisibleCart, setIVisibleCart] = useState(false);

    const handleLogOut = () =>{
        dispatch(reset())
        navigate("/login");
    }

    useEffect(()=>{
        loadCartQuantity();
    },[ isLogged, cartProducts])
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
                    {cartProducts && cartProducts.length !=0 ? <p className="cartQuantity">{cartProducts.length}</p> : <></>}
                </div>
                
                {isLogged && <button onClick={handleLogOut}><i className="fa-solid fa-right-from-bracket "></i></button>}
            </div>
            
            {isVisibleCart && isLogged &&  <CartModal/>}

        </header>
    </>)
}

export default Header;