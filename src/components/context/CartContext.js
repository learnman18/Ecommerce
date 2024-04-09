import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer"

const CartContext = createContext();

const initialState = {
    cart : []
}

const CartProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer , initialState);
    const AddToCart = (prodcutName , productPrice , firstImage , productUrl) => {
        dispatch({type : "ADD_TO_CART" , payload : {prodcutName , productPrice, firstImage , productUrl}});
    }
    return <CartContext.Provider value={{...state , AddToCart}}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider , useCartContext};