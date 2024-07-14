import React from "react";
import emptyCartImg from "../Images/empty-cart.webp"
import "../Footer/cartFooter.css"
import { Link } from "react-router-dom";

export default function EmptyCart() {
    return(
        <div className="emptyCart">
            <div className="emptyCart-base-mainContainer">
                <picture className="image-base-imgResponsive">
                <img src={emptyCartImg} alt="empty cart" loading="eager" style={{height: 165, width: 146}} />
                </picture>
                <div>
                    <div class="emptyCart-base-emptyText">Hey, it feels so light!</div>
                    <div class="emptyCart-base-emptyDesc">There is nothing in your bag. Let's add some items.</div>
                </div>
                <div style={{marginTop:25}}>
                    <Link to="/products" className="emptyCartButton">Check a Product</Link>
                </div>
            </div>
        </div>
    )
}