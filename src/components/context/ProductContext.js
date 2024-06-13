import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/ProductReducer"

const ProductContext = createContext();

const initialState = {
    ProductCart : []
}

const ProductProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer  , initialState);
    const AddCartItem = (id,name,price,company) => {
        console.log("item" , name);
        dispatch({type:"ALL_ITEMS" , payload : {id,name,price,company}})
    }

    return <ProductContext.Provider value={{...state , AddCartItem}}>{children}</ProductContext.Provider>
}

const useProductContext = () => {
    return useContext(ProductContext)
}

export {ProductProvider, useProductContext}