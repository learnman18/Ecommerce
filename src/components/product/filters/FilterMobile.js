import React from "react";

export default function FilterMobile (props){

    const categories = new Set();
    if(props.allProductData){
        props.allProductData.map((item)=> categories.add(item.category))
    }

    const SearchProduct = (event) => {
        console.log("event" , event);
    }

    const CategorySelect = (clickedCategory) => {
        props.clickedCategoryItem(clickedCategory)
    }

    const ClearFilter = () => {
        props.clearAllFilters()
    }

    return(
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Filter the products
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse hide" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div>
                                <input type="text" placeholder="search" onChange={(event)=>SearchProduct(event.target.value)}/>
                            </div>
                            <div>
                                <p>Category</p>
                                <ul style={{listStyleType:"none",textTransform:"capitalize"}}>
                                    {
                                        [...categories].map((category , index)=>(
                                            <li key={index} onClick={()=>CategorySelect(category)}>{category}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <button onClick={ClearFilter}>Clear Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}