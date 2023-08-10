import { useEffect, useState } from "react";
import "./Search.css";
import getProductByNameAndCategory from "../../services/Categories/getProductByNameAndCategory";

const Search = ({setAllProducts}) =>{
    const [productName, setProductName ] = useState()
    const [errorMessage, setErrorMessage ] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const finded = await getProductByNameAndCategory(productName)
        setAllProducts(finded)
    }

    const handleChange = (e) =>{
        if(!e.target.value ){
            setErrorMessage("you must write something")
        }
        else{
            setErrorMessage("")
        }
        setProductName(e.target.value)

    }

    return(
    <>
        <div className="searchContainer">
        
            <form onSubmit={handleSubmit}>       
               <input type="text" value={productName} onChange={handleChange} placeholder="What are you looking for?"/>
               <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            {errorMessage && <p className="noMatchesErrorMessage">{errorMessage}</p>}
        </div>
    </>)
}

export default Search;