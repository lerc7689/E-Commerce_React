import { useEffect, useState } from "react";
import getAllCategories from "../../services/getAllCategories"
import "./SidebarFilters.css"

const SidebarFilters = ({setAllProducts, allProductStore, loadAllProducts}) =>{
    const [allCategories, setAllCategories] = useState([]);
    const [isVisiblePrice, setIsVisiblePrice] = useState(true);
    const [isVisibleCategory, setIsVisibleCategory] = useState(true);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const valueFrom = Number(e.target[0].value)
        const valueTo = Number(e.target[1].value)
        const filteresByPrice = allProductStore.filter(p => p.price > valueFrom && p.price < valueTo)
        setAllProducts(filteresByPrice)
    }

    const loadCategories = async() =>{
        const categories = await getAllCategories();
        setAllCategories(categories)
    }

    const handleCategorie = (e) =>{
        const productName = e.target.firstChild.data;
        let filteredProducts = allProductStore.filter(product => product.category.name == productName)
        setAllProducts(filteredProducts)
    }

    useEffect(()=>{
        loadCategories();
    },[]);
    return(
    <>
      <div className="SidebarFilters">
          <div className="priceFilterContainer" >
                  <div className="priceCategoryTitleContainer" onClick={()=>setIsVisiblePrice(!isVisiblePrice)}>
                      <p>Price</p>
                      <p style={{transform:isVisiblePrice? "rotate(0)":" rotate(180deg"}}><i className="fa-solid fa-caret-down"></i></p>
                  </div>
                  {isVisiblePrice &&(
                    <form onSubmit={handleSubmit} className="filterForm">
                    <div className="priceFrom">
                        <label htmlFor="priceFrom">From</label>
                        <input type="number" min={0} name="priceFrom" id="priceFrom" />
                    </div>
                    <div className="priceTo">
                        <label htmlFor="priceTo">To</label>
                        <input type="number" min={0} name="priceTo" id="priceTo" />
                    </div>
                    <div className="filterFormButtonContainer">
                        <button type="submit">Filter price</button>
                    </div>
                    </form>
                  )}
                  
                  <div className="categoryFilterContainer">
                      <div className="priceCategoryTitleContainer"  onClick={()=>setIsVisibleCategory(!isVisibleCategory)}>
                          <p>Category</p>
                          <p style={{transform:isVisibleCategory? "rotate(0)":" rotate(180deg"}}><i className="fa-solid fa-caret-down"></i></p>
                      </div> 
                      
                      {isVisibleCategory &&(
                            <div className="categorieList">
                                <p onClick={loadAllProducts}>All Categories</p>
                                {allCategories && (
                                    allCategories.map(categorie =>
                                        <p onClick={handleCategorie} key={categorie.id} value={categorie.name}>{categorie.name}</p>
                                    )
                                )}
                            </div> 
                      )}
                  </div>  
          </div>
      </div>
    </>)
}

export default SidebarFilters;