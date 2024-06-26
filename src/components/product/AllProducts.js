import React, { useEffect, useState } from "react";
import FilterDesktop from "./filters/FilterDesktop";
import FilterMobile from "./filters/FilterMobile";
import axios from "axios";
import Spinner from "../pageLoader/Spinner";
import { Link } from "react-router-dom";

const AllProducts = () => {

    const [allCartProducts , setAllCartProducts] = useState();
    const [pageLoader , setPageLoader] = useState(false);
    const [displaySelectedCategroy , setdisplaySelectedCategroy] = useState();
    const [categoryStyle , setCategoryStyle] = useState("");
    
    useEffect(()=>{
        setPageLoader(true)
        axios.get(`https://api.pujakaitem.com/api/products`)
        .then((response)=>{
            console.log("response" , response.data);
            setAllCartProducts(response.data);
            setPageLoader(false)
        })
        .catch((err)=>console.log("error" , err));
    },[])

    //will get a function from child comp which is filerMobile and filterDesktop, on click of category I want to display the product.

    const selectedCategory = (clickedCategory) => {
        setCategoryStyle("d-none");
        const cat = allCartProducts.filter((item)=>(
            // console.log(item.category === clickedCategory)
            item.category === clickedCategory ? item : ""
        ))
        console.log("cat" , cat);
        setdisplaySelectedCategroy(cat);
    }
    //Clear filter passing from child to parent

    const ClickedClearFilter = () => {
        setCategoryStyle("");
    }

    return(
        <>
            {
                pageLoader && <Spinner></Spinner>
            }
            {
                !pageLoader && 

            <div style={{marginTop:"80px"}}>
                <div className="row">
                    <div className="col-md-12 d-flex productPage flex-wrap">
                        <div className="col-md-3">
                            {/* start - For laptop and desktop */}
                            <div className="d-md-block d-none">
                                <FilterDesktop allProductData={allCartProducts} displaySelectedCat={displaySelectedCategroy} clickedCategoryItem={selectedCategory} clearAllFilters={ClickedClearFilter}></FilterDesktop>
                            </div>
                            {/* end - For laptop and desktop */}
                            {/* start - For Mobiles */}
                            <div className="d-block d-md-none">
                                <FilterMobile allProductData={allCartProducts} displaySelectedCat={displaySelectedCategroy} clickedCategoryItem={selectedCategory} clearAllFilters={ClickedClearFilter}></FilterMobile>
                            </div>
                            {/* end - For Mobiles */}
                        </div>
                        <div className="col-md-9 d-flex flex-wrap">
                            {
                                allCartProducts && 

                                allCartProducts.map((item)=>
                                    (
                                    <div className={`col-md-4 ${categoryStyle}`} key={item.id}>
                                        <Link style={{textDecoration:"none"}} to={`/AllProdcuts/${item.name}`}>
                                            <div className="card allProductCard">
                                                <img src={item.image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text">{item.name}</p>
                                                    <p className="card-text">{item.price}</p>
                                                    <p className="card-text">{item.company}</p>
                                                </div>
                                            </div>
                                        </Link>    
                                    </div>  
                                    )
                                )
                            }
                            {
                                displaySelectedCategroy && 

                                displaySelectedCategroy.map((item)=>
                                    item.id &&
                                    (
                                        <div className="col-md-4" key={item.id}>
                                            <Link style={{textDecoration:"none"}} to={`/AllProdcuts/${item.name}`}>
                                                <div className="card allProductCard">
                                                    <img src={item.image} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">{item.name}</p>
                                                        <p className="card-text">{item.price}</p>
                                                        <p className="card-text">{item.company}</p>
                                                    </div>
                                                </div>
                                            </Link>    
                                        </div>  
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default AllProducts;