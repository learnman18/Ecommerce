import React, { useEffect, useState } from "react";


export default function HomePageCartPayment(props) {

    // console.log(props.allCartItem.length)
    const [paymentPrice , setPaymentPrice] = useState([])

    useEffect(()=>{
        console.log("paymentPrice" , paymentPrice);
        const updatePaymentPrice = props.allCartItem.map((item)=>{
            return item.totalPriceSignleProd;
        })
        console.log("updatePaymentPrice" , updatePaymentPrice);
        const x = updatePaymentPrice.reduce((a,b)=> a + b ,0)
        console.log("x" , x);
        setPaymentPrice(x)
    },[props.allCartItem , paymentPrice])
    
    return(
        <>
            <div>
                <div style={{border: "none", background: "transparent", padding:"1rem" }}>
                    <div className="itemPaymentDetail">
                        <div className="allPriceInfo">
                            <div className="priceDetails">Price Details</div>
                            <div style={{padding:"0 24px"}}>
                                <div className="priceOptions">
                                    <div>Price ({props.allCartItem.length > 1 ? props.allCartItem.length + " Items" : props.allCartItem.length + " Item"})</div>
                                    {/* <div>Price ({`${props.allCartItem.length > 1 ? props.allCartItem.length + "Items" : props.allCartItem.length + "Item"}`})</div> */}
                                    <div>&#8377; {paymentPrice}</div>
                                </div>
                                <div className="priceOptions">
                                    <div>Discount</div>
                                    <div>&#8377;</div>
                                </div>
                                <div className="LastPriceOptions">
                                    <div>Delivery charge</div>
                                    <div>{paymentPrice > 500 ? "Free" : <span>&#8377;80</span>}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}