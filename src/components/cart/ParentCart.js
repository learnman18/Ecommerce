import React from "react";
// import { useProductContext } from "../context/ProductContext";
// import {useCartContext} from "../context/CartContext";
import {useBadgeContext} from "../context/BadgeContextProvider";
import Cart from "../ProdcutsInfo/Cart";
import ProductInsideCart from "../product/ProductInsideCart";
import CartFooter from "../Footer/CartFooter";
import EmptyCart from "./EmptyCart";

const ParentCart = () => {

    const { cartBadge, productCartBadge } = useBadgeContext();

    return(
        <div style={{marginTop:"80px"}}>
            {cartBadge > 0  && <Cart></Cart>}
            {productCartBadge > 0 && <ProductInsideCart></ProductInsideCart>}
            {!cartBadge && !productCartBadge && <><EmptyCart></EmptyCart></>}
            <div className="d-none d-md-block">
                <CartFooter></CartFooter>            
            </div>
        </div>
    )
}

export default ParentCart;