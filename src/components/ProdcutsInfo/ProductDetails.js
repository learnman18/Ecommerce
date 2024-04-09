import React from "react";
import { useParams } from "react-router-dom";
import HomePageItems from "./HomePageList"
import HomePageProducts from "./HomePageProduct";

const ProductSpecification = () => {

    /*product name is coming from src\components\HomePage\FeaturedServices.js file 
    here I'm accessing it using useParams() hook. you can see it in URL
    */
    const {productName} = useParams();

    return(
        // <h1>this is {productName} prodcut</h1>
        <>

            {
                HomePageItems.map((currentProd , index) => {
                    return currentProd.selectedProductName === productName &&  
                    <div key={currentProd.productId} className="ecommerce container" style={{marginTop:"80px"}}>
                        <HomePageProducts key={index = index+1} productID={currentProd.productId} firstImage={currentProd.productImg1} prodcutName={currentProd.selectedProductName}
                        secondImage={currentProd.productImg2} thirdImage={currentProd.productImg3}
                        mainImage={currentProd.productMain} productDescription={currentProd.selectedProdDesc} productPrice={currentProd.price}
                        ></HomePageProducts>
                    </div>
                })
            }
            
        </>
    )
}

export default ProductSpecification;