import { Link, useParams } from "react-router-dom";
import "./ProductId.css";
import { useEffect, useState } from "react";
import getProductById from "../../services/Products/getProductById";
import getAllProducts from "../../services/Products/getAllProducts";
import ProductCard from "../../components/ProductCard/ProductCard"
import { useSelector } from "react-redux";
import { addProductToCart } from "../../services/Cart/addProductToCart";

const ProductId = () =>{
    const {id} = useParams();
    const [ productData, setProductData] = useState(null)
    const [ actualImage, setActualImage] = useState(0)
    const [ productQuantity, setProductQuantity] = useState(1)
    const [ similarProducts, setSimilarProducts] = useState([])
    const token = useSelector(store => store.auth.token);

    const loadProductById = async() =>{
        const data = await getProductById(id)
        setProductData(data)
        loadSimilarProducts(data)
    }

    const loadSimilarProducts = async (data) =>{
        const productName = data.category.name;
        const categoryData = await getAllProducts();
        const filteredProducts = categoryData.filter(p => p.category.name == productName && p.id != id)
        setSimilarProducts(filteredProducts);
    }
    const handleAddToCart = async() =>{
       const data = {token: token, quantity : productQuantity, productId: productData.id};
        await addProductToCart(data);
    }

useEffect(()=>{
    loadProductById();
},[id])
    return(
    <>
       
        <div className="productIdContainer">
            <div className="routeTitle">
                <Link to="/" style={{textDecoration:"unset", color:"unset"}}><p>Home </p></Link>
                <div className="separator"></div>
                <h4>{productData?.title}</h4>
            </div>

            <div className="img_detail_container">
                <div className="imgContainerProductId">
                <button className="backImageButton"  onClick={()=>{if (actualImage!= 0 )setActualImage(actualImage -1)}}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="nextImageButton" onClick={()=>{if (actualImage!= 1 )setActualImage(actualImage +1)}} >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
                    <div className="bigImgContainer">
                            <img src={productData?.images[actualImage]?.url} alt="" />
                    </div>
                    <div className="actualSmallImgContainer">
                        <div className="SmallImg" tabindex="-1">
                            <div>
                                <img src={productData?.images[0]?.url} alt="" onClick={()=>setActualImage(0)}/>
                            </div>
                        </div>
                        <div className="SmallImg"  tabindex="-1">
                            <div>
                                <img src={productData?.images[1]?.url} alt="" onClick={()=>setActualImage(1)}/>
                            </div>
                        </div>
                        <div className="SmallImg"  tabindex="-1">
                            <div>
                                <img src={productData?.images[2]?.url} alt=""  onClick={()=>setActualImage(2)}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail_productId_container">
                    <p className="productBrand_productId">{productData?.brand}</p>
                    <h2 className="productModel_productId">{productData?.title}</h2>
                    <p className="producDescription_productId">{productData?.description}</p>
                    <div className="priceQuantityContainer">
                        <div className="princeContainer">
                        <p className="priceTitle_ProductId">Price</p>
                            <h2 className="price_productId">${productData?.price}</h2>
                        </div>
                        <div className="quantityContainer">
                            <p className="quantityTitle_ProductId">Quantity</p>
                            <div className="quantity">
                                <button onClick={()=> { if(productQuantity > 1 )setProductQuantity(productQuantity-1)}}>-</button>
                                <p>{productQuantity}</p>
                                <button onClick={()=> setProductQuantity(productQuantity+1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <button className="add_to_cart_Button_productId" onClick={()=> handleAddToCart()}>Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
                </div>

            </div>
            <h3 className="similarTitle_productId">Discover similar items</h3>
            <div className="similarContainer_productId">
                {similarProducts && similarProducts.map(similar =>
                    <Link key={similar.id} 
                        to={`/product/${similar.id}`} 
                        style={{color:"unset", textDecoration:"none"}}
                    >
                        <ProductCard Product={similar}/>
                    </Link>
                )}
            </div>
        </div>
    </>)
}

export default ProductId;