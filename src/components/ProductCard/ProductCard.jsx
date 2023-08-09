import "./ProductCard.css"
import { useSelector } from "react-redux";
import { addProductToCart } from "../../services/Cart/addProductToCart";
import { useEffect, useState } from "react";
import { getCartProducts } from "../../services/Cart/getCartProducts";

const ProductCard = ({Product}) =>{
    const token = useSelector(store => store.auth.token);

    const [cartProducts, setcartProducts] = useState();
    const loadCartQuantity =  async () =>{
        const cartProductsData = await getCartProducts(token)
        setcartProducts(cartProductsData)
    }

    const changeNewImg = (e) =>{
        e.target.src= Product.images[1].url;
    }
    const changeOldImg = (e) =>{
        e.target.src= Product.images[0].url;
    }       
    const addTocartHandle = async(e) =>{
        e.preventDefault()
        const data = {token: token, quantity :  1, productId: Product.id};
        await addProductToCart(data);
    }

    useEffect(()=>{
        loadCartQuantity();
    },[cartProducts])
    return(<>
        <div className="ProductCard">
            <div className="imgContainer">
                <img src={Product.images[0]?.url} alt="" onMouseOver={changeNewImg} onMouseOut={changeOldImg} id="img1" />
            </div>
            <div className="infContainer">
                <div className="brandContainer">
                    <p className="brand">{Product.brand}</p>
                    <strong>{Product.title}</strong>
                </div>
                <div className="priceContainer">
                    <p className="price">price</p>
                    <strong>${Product.price}</strong>
                </div>
                
                {cartProducts && cartProducts.length !== 0  ? 
                    <>
                        {cartProducts?.some(p=> p.productId == Product.id) ? 
                                    <p className="selectedProductMessage" >This product is already in the cart</p>                        
                                :

                                    <div className="cartIconProductCard" onClick={addTocartHandle}>
                                                <i className="fa-solid fa-cart-shopping"></i>
                                            </div>
                                
                        }
                    </>
                :
                    
                    <div className="cartIconProductCard" onClick={addTocartHandle}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                }
            </div>
        </div>
    </>)
}

export default ProductCard;