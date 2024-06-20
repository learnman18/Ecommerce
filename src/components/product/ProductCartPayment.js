import React, { useEffect, useState } from "react";

export default function ProductCartPayment(props) {

    // console.log(props.allProductCartItem.length)
    const [productPaymentPrice , setProductPaymentPrice] = useState([])

    useEffect(()=>{
        // console.log("productPaymentPrice" , productPaymentPrice);
        const updateproductPaymentPrice = props.allProductCartItem.map((item)=>{
            return item.totalPriceOfSingleProduct;
        })
        console.log("updateproductPaymentPrice" , updateproductPaymentPrice);
        const sumOfCartProducts = updateproductPaymentPrice.reduce((a,b)=> a + b ,0)
        // console.log("x" , sumOfCartProducts);
        setProductPaymentPrice(sumOfCartProducts)
    },[props.allProductCartItem , productPaymentPrice])
    
    return(
        <>
            <div>
                <div style={{border: "none", background: "transparent", padding:"1rem" }}>
                    <div className="itemPaymentDetail">
                        <div className="allPriceInfo">
                            <div className="priceDetails">Price Details</div>
                            <div style={{padding:"0 24px"}}>
                                <div className="priceOptions">
                                    <div>Price ({props.allProductCartItem.length > 1 ? props.allProductCartItem.length + " Items" : props.allProductCartItem.length + " Item"})</div>
                                    {/* <div>Price ({`${props.allProductCartItem.length > 1 ? props.allProductCartItem.length + "Items" : props.allProductCartItem.length + "Item"}`})</div> */}
                                    <div>&#8377; {productPaymentPrice}</div>
                                </div>
                                <div className="priceOptions">
                                    <div>Discount</div>
                                    <div>&#8377;</div>
                                </div>
                                <div className="deliveryCharge">
                                    <div>Delivery charge
                                    {
                                        productPaymentPrice > 500 ? 
                                        <p style={{fontSize:11,color:"#388e3c",fontWeight:500}}>Free delivery applied</p> :
                                        <p style={{fontSize:11}}>Order above 500 to get free delivery</p>
                                    }
                                    </div>
                                    <div>{productPaymentPrice > 500 ? "Free" : <span>&#8377;80</span>}</div>
                                </div>
                                <div className="LastPriceOptions">
                                    <div>Total Amount</div>
                                    <div>{productPaymentPrice > 500 ? productPaymentPrice : productPaymentPrice + 80}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}