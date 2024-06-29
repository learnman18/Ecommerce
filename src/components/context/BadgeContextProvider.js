import React, { useState, useEffect, createContext, useContext } from "react";
import {useCartContext} from "../context/CartContext"
import {useProductContext} from "../context/ProductContext"

const BadgeContext = createContext();

const BadgeProvider = ({children}) => {

    const {cart} = useCartContext();
    const {ProductCart} = useProductContext();
    const [cartBadge , setCartBadge] = useState()
    const [productCartBadge , setProductCartBadge] = useState();

    /*
        we are stroing the cart and producatCart length in localstorage by using useState cartBadge and productCartBadge, so we can access
        on other files, before this if we are accessing the cart or ProductCart of context file the value gets chnaged to zero after reresh
        that's why we are creating another context file for this badge count
    */

    useEffect(()=>{
        let z = cart.length;
        setCartBadge(z);
    },[cart])
    console.log("cart menu bar" , cartBadge)

    useEffect(()=>{
        const storedBadgeToken = JSON.parse(localStorage.getItem("cartCountStore"));
        if(storedBadgeToken){
            setCartBadge(storedBadgeToken);
        }
        console.log("storedBadgeToken" , storedBadgeToken);
    },[])
    console.log("cartBadge" , cartBadge)

    useEffect(()=>{
        if(cartBadge > 0){
            localStorage.setItem("cartCountStore" , JSON.stringify(cartBadge));
        }else if(cartBadge === 0){
            localStorage.removeItem('cartCountStore');
        }
    },[cartBadge])

    //Product cart

    useEffect(()=>{
        let z = ProductCart.length;
        setProductCartBadge(z);
    },[ProductCart])
    console.log("cart menu bar" , productCartBadge)

    useEffect(()=>{
        const storedProductBadgeToken = JSON.parse(localStorage.getItem("productCartCountStore"));
        if(storedProductBadgeToken){
            setProductCartBadge(storedProductBadgeToken);
        }
        console.log("storedProductBadgeToken" , storedProductBadgeToken);
    },[])
    console.log("productCartBadge" , productCartBadge)

    useEffect(()=>{
        if(productCartBadge > 0){
            localStorage.setItem("productCartCountStore" , JSON.stringify(productCartBadge));
        }else if(productCartBadge === 0){
            localStorage.removeItem('productCartCountStore');
        }
    },[productCartBadge])

    return(
        <>
            <BadgeContext.Provider value={{cartBadge, productCartBadge}}>{children}</BadgeContext.Provider>
        </>
    )
}

const useBadgeContext = () => {
    return useContext(BadgeContext)
}

export {BadgeProvider,useBadgeContext}