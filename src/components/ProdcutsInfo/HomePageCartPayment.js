import React from "react";


export default function HomePageCartPayment(props) {

    // console.log(props.allCartItem.length)
    
    return(
        <>
            <div>
                <div style={{border: "none", background: "transparent", padding:"1rem" }}>
                    <div className="itemPaymentDetail">
                        <div className="allPriceInfo">
                            <div className="priceDetails">Price Details</div>
                            <div style={{padding:"0 24px"}}>
                                <div className="priceOptions">
                                    <div>Price ({props.allCartItem.length} Item)</div>
                                    <div>&#8377;2000</div>
                                    {/* <div>{props.allCartItem.map((item)=><span>{item.priceOfProduct += item.priceOfProduct}</span>)}</div> */}

                                </div>
                                <div className="priceOptions">
                                    <div>Discount</div>
                                    <div>&#8377;</div>
                                </div>
                                <div className="LastPriceOptions">
                                    <div>Delivery charge</div>
                                    {/* <div>{props.allCartItem.map((item)=> <span key={item.id + 1}>{item.priceOfProduct > 500 ? <span>Free</span> : <span>&#8377;80</span>}</span>)} </div> */}
                                    <div>&#8377;80</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}