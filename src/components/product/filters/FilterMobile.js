import React, { useEffect, useState }  from "react";

export default function FilterMobile (props){

    const [selectedCategoryOption , setSelectedCategoryOption] = useState();

    const categories = new Set();
    if(props.allProductData){
        props.allProductData.map((item)=> categories.add(item.category))
    }

    useEffect(()=>{
        props.displaySelectedCat && props.displaySelectedCat.map((item)=>{
            let x = item.category.split(",");
            console.log("x" , x[0])
            return setSelectedCategoryOption(x[0]);
        })
    },[props.displaySelectedCat])
    // console.log("selectedCategoryOption" , selectedCategoryOption)

    const SearchProduct = (event) => {
        console.log("event" , event);
    }

    const CategorySelect = (clickedCategory) => {
        props.clickedCategoryItem(clickedCategory)
    }

    const ClearFilter = () => {
        props.clearAllFilters(); //this is child page, and we are doing here child to parent props passing through function, we are calling the parent funcion here
        setSelectedCategoryOption("") // just to remove the highlight class
    }

    return(
        <>
            <div className="accordion" id="accordionExample" style={{marginBottom:10}}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Filter the products
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse hide" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <div>
                                <input type="text" placeholder="search" onChange={(event)=>SearchProduct(event.target.value)}/>
                            </div>
                            <div>
                                <p style={{margin:"10px 0",fontWeight:500}}>Category</p>
                                <ul style={{listStyleType:"none",textTransform:"capitalize"}}>
                                    {
                                        [...categories].map((category , index)=>(
                                            <li key={category} className={`categoryItem ${selectedCategoryOption === category ? "highlight" : ""}`} onClick={()=>CategorySelect(category)}>{category}</li>
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