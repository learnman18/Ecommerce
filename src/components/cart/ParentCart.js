import React from "react";
// import { useProductContext } from "../context/ProductContext";
// import {useCartContext} from "../context/CartContext";
import {useBadgeContext} from "../context/BadgeContextProvider";
import Cart from "../ProdcutsInfo/Cart";
import ProductInsideCart from "../product/ProductInsideCart";

const ParentCart = () => {

    const { cartBadge, productCartBadge } = useBadgeContext();

    return(
        <div style={{marginTop:"80px"}}>
            {cartBadge > 0  && <Cart></Cart>}
            {productCartBadge > 0 && <ProductInsideCart></ProductInsideCart>}
            {!cartBadge && !productCartBadge && <h3>No Item in cart</h3>}
        </div>
    )
}

export default ParentCart;