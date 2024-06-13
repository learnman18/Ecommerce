import React from "react";
import {useProductContext} from "../context/ProductContext"

const SingleProduct = () => {
    const {ProductCart} = useProductContext();
    console.log("ProductCart" , ProductCart)
    let pathName = window.location.pathname;
    let splitThePath = pathName.split("/");
    let getTheLastArray = splitThePath.slice(-1)[0];
    let decodeTheURL = decodeURIComponent(getTheLastArray);
    console.log("decodeTheURL" , decodeTheURL);

    return(
        <>
            <div style={{marginTop:"80px"}}>
                {
                    // decodeTheURL === ProductCart[0].itemName &&
                    <div>
                        <h3>Name of the product {ProductCart[0].itemName}</h3>
                    </div>
                }
            </div>
        </>
    )
}

export default SingleProduct;