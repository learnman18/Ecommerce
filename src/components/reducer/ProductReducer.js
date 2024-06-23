const ProductReducer = (state , action) => {
    
    if(action.type === "ALL_ITEMS"){
        const {id, name, price, company, productUrl, image, itemCount, category} = action.payload;

        const existingProductIndex = state.ProductCart.findIndex((item) => item.itemName === name);
        console.log("productReducer" , company)

        if(existingProductIndex !== -1){
            let allCartItem = {
                id : id,
                itemName : name,
                itemPrice : Number(price),
                itemCompany : company,
                urlOfProduct : productUrl,
                productImage : image,
                singleProductQuantity : itemCount,
                totalPriceOfSingleProduct : Number(price) * Number(itemCount),
                productCategory : category
            }
            return {
                // ...state,
                // cart: updatedCart
                ProductCart : [allCartItem]
            };
        }else{
            let allCartItem = {
                id : id,
                itemName : name,
                itemPrice : Number(price),
                itemCompany : company,
                urlOfProduct : productUrl,
                productImage : image,
                singleProductQuantity : itemCount,
                totalPriceOfSingleProduct : Number(price)
            }
            return{
                ...state,
                ProductCart : [...state.ProductCart , allCartItem]
            }
        }
        
    }
    else if(action.type === "RESET_PPRODUCT_CART_COUNT"){
        console.log("state" , state);
        return {
            ...state,
            ProductCart : action.payload
        }
    }

    return state
}

export default ProductReducer;