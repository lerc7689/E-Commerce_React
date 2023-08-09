import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Purchases.css";
import { useSelector } from "react-redux";
import { getPurchases } from "../../services/purchases/getPurchases";

const Purchases = () =>{
    const token = useSelector(store => store.auth.token);
    const [ purchaseData, setPurchaseData ] = useState([]);

    const loadPurchases = async () =>{
        const data = await getPurchases(token)
        setPurchaseData(data)
        console.log(data)
    }
    useEffect(()=>{
        loadPurchases();
    },[])
    return(
    <>
        <div className="purchasesContainer">
            <div className="routeTitle">
                <Link to="/" style={{textDecoration:"unset", color:"unset"}}><p>Home </p></Link>
                <div className="separator"></div>
                <h4>Purchases</h4>
            </div>
            <h1 className="purchasesTitle">My purchases</h1>
            <div className="purchasesProductList">
            
            { purchaseData && purchaseData.map(product =>

                <div className="purchaseCard">
                    <div className="imgContainerPurchase">
                        <img src={product.product?.images[0]?.url} alt="" />
                    </div>
                    <div className="productNameContainerPurchase">
                        <p>{product.product?.title}</p>
                    </div>
                    <div className="quantityContainerPurchase">
                        <p>{product.quantity}</p>
                    </div>
                    <div className="productCreatedContainerPurchase">
                        <p>{product?.createdAt.slice(0,10)}</p>
                    </div>  
                    <div className="totalPriceContainerPurchase">
                        <p>${product?.quantity * product.product?.price}</p>
                    </div>  
                </div>    
            )}
            </div>
        </div>
    </>)
}

export default Purchases;