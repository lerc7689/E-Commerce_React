import { useEffect, useState } from "react";
import { DeleteCartProduct } from "../../services/Cart/DeleteCartProduct";
import "./CartProduct.css";
import { useSelector } from "react-redux";
import { UpdateProductCart } from "../../services/Cart/UpdateProductCart";

const CartProduct = ({productItem}) =>{
    const token = useSelector(store => store.auth.token);
    const [quantity, setQuantity] = useState(productItem.quantity);
    
    const handleDelete = async () =>{
        await DeleteCartProduct(token, productItem.id);
    }

    const handleUpdate = async () =>{
        await UpdateProductCart(token, quantity, productItem.id)
    }

    useEffect(()=>{
        handleUpdate();
    },[quantity]);
    return(
    <>
        <div className="product">
            <div className="cartProductImg">
                <img src={productItem.product.images[0].url} alt="" />
            </div>
            <div className="cartProductInfo">
                <p>{productItem.product.title}</p>

                <div className="quantityCartContainer">
                    <button className="cartBtn" onClick={()=>{ if(quantity > 1)setQuantity(quantity-1)}}>-</button>
                        <p>{quantity}</p>
                    <button className="cartBtnPlus" onClick={()=> setQuantity(quantity+1)}>+</button>
                </div>
                
                <p  className="cartProductPrice">{productItem.product.price * quantity}</p>
                 
            </div>
            <button className="deleteBtn" onClick={handleDelete}><i class="fa-solid fa-trash-can"></i></button>            
        </div>
    </>)
}

export default CartProduct;