import { useEffect, useState } from "react";
import "./ProductList.css"
import getAllProducts from "../../services/Products/getAllProducts";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import SidebarFilters from "../SidebarFilters/SidebarFilters";

const ProductList = () =>{
    const [allProducts, setAllProducts] = useState([]);
    const [allProductStore, setAllProductStore] = useState([]);

    const loadAllProducts = async () =>{
        const dataProducts = await getAllProducts();
        setAllProducts(dataProducts)
        setAllProductStore(dataProducts)
    }
    useEffect(()=>{
        loadAllProducts();
    },[]);
    return(
    <>
        <SidebarFilters setAllProducts={setAllProducts}  allProducts={allProducts} allProductStore={allProductStore} loadAllProducts={loadAllProducts}/>
        <div className="ProductListSearchContainer">
            <Search setAllProducts={setAllProducts}/>
            <div className="ProductList">
                {allProducts && allProducts.length == 0? <p className="noMatchesMessage">No matches</p> :(
                    
                    allProducts?.map(product =>
                        <Link key={product.id} 
                        to={`/product/${product.id}`} 
                        style={{color:"unset", textDecoration:"none"}}
                        >
                            <ProductCard Product={product}/> 
                        </Link>   
                    )
                )}
            </div>
        </div>
    </>)
}

export default ProductList;