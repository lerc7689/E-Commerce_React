import { useEffect, useState } from "react";
import "./CartModal.css";
import { getCartProducts } from "../../services/Cart/getCartProducts";
import { useSelector } from "react-redux";
import CartProduct from "../CartProduct/CartProduct";
import { createPurchase } from "../../services/Purchases/createPurchase";
import { useNavigate } from "react-router-dom";

const CartModal = () =>{
    const token = useSelector(store => store.auth.token);
    const [product, setProduct] = useState([]);
    const [total, setTotal] = useState();
    const navigate = useNavigate();
    
    const loadCartProducts = async() =>{
        const data = await getCartProducts(token)
        setProduct(data)
        let totalAcumulative = 0;
        data.map(p =>{totalAcumulative += Number(parseInt( p.product.price)* p.quantity) })
        setTotal(totalAcumulative)
    }

    const handleCheckout = async () =>{
        await createPurchase(token);
        navigate("/purchases")
    }

    useEffect(()=>{ 
        loadCartProducts()
    }, [product])
    return(
    <>
        {product && product != 0 ? 
            
            <div className="CartContainer">
                <h2 className="cartTitle">Shopping Cart</h2>
                <div className="cartProductContainer">
                    {product.length !=0 && product.map(productItem =>
                        <CartProduct productItem={productItem} />
                    )}
                </div>

                <div className="totalCartContainer">
                    <div className="total">
                        <h3>Total:</h3>
                        <h3>${total}</h3>
                    </div>
                    <button className="cartCheckout" onClick={handleCheckout}>Chekout</button>

                </div>
            </div>
                
                :
                <div className="CartContainer">
                        <div className="cartEmptyContainer">
                            <p>Empty cart</p>
                    </div>
                </div>
        }
    </>)
}

export default CartModal;