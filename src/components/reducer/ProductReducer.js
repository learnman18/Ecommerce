const ProductReducer = (state , action) => {
    if(action.type === "ALL_ITEMS"){
        const {id,name,price,company} = action.payload;
        console.log("productReducer" , company)
        let allCartItem = {
            id : id,
            itemName : name,
            itemPrice : price,
            itemCompany : company
        }
        return{
            ...state,
            ProductCart : [...state.ProductCart , allCartItem]
        }
    }

    return state
}

export default ProductReducer;