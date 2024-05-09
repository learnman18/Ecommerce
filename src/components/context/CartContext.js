import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer"

const CartContext = createContext();

const initialState = {
    cart : []
}

const CartProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer , initialState);
    const AddToCart = (prodcutName , productPrice , firstImage , productUrl , count) => {
        dispatch({type : "ADD_TO_CART" , payload : {prodcutName , productPrice, firstImage , productUrl , count}});
    }
    const ResetCartCount  = () => {
        dispatch({ type : "RESET_CART_COUNT"})
    }
    // const RemoveFromCart = (deleteItem) => {
    //     dispatch({type : "REMOVE_FROM_CART" , payload : {deleteItem}} )
    // }

    return <CartContext.Provider value={{...state , AddToCart , ResetCartCount }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider , useCartContext};