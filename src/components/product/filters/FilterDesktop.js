import React from "react";
// import useProductContext from "../../context/ProductContext"

export default function FilterDesktop (props) {

    // const {ProductCart} = useProductContext()

    const categories = new Set();
    if (props.allProductData) {
    props.allProductData.forEach((item) => {
        categories.add(item.category);
    });
    }

    const SearchProduct = (event) => {
        console.log("event" , event);
    }

    const CategorySelect = (clickedCategory) => {
        props.clickedCategoryItem(clickedCategory)
    }

    return(
        <>
            <div>
                <div>
                    <input type="text" placeholder="search" onChange={(event)=>SearchProduct(event.target.value)}/>
                </div>
                <div>
                    <p>Category</p>
                    <ul style={{listStyleType:"none",textTransform:"capitalize"}}>
                    {[...categories].map((category) => (
                        <li key={category} className="categoryItem" onClick={()=>CategorySelect(category)}>{category}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <button>Clear Filter</button>
                </div>
            </div>
        </>
    )
}