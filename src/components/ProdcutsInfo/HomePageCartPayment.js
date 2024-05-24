import React from "react";


export default function HomePageCartPayment() {
    return(
        <>
            <div>
                <div style={{border: "none", background: "transparent", padding:"1rem" }}>
                    <div className="itemPaymentDetail">
                        <div className="allPriceInfo">
                            <div className="priceDetails">Price Details</div>
                            <div>
                                <div>Price (1 Item)</div>
                                <div>&#8377;2000</div>
                            </div>
                            <div>
                                <div>Discount</div>
                                <div>&#8377;</div>
                            </div>
                            <div>
                                <div>Delivery charge</div>
                                <div>&#8377;80</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}