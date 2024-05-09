const CartReducer = (state , action) => {

    if(action.type === "ADD_TO_CART"){
        const {prodcutName , productPrice, firstImage , productUrl, count}  = action.payload;
        // console.log(prodcutName , productPrice);

        // Check if the product already exists in the cart
        const existingProductIndex = state.cart.findIndex((item) => item.nameOfProduct === prodcutName);

        if(existingProductIndex !== -1){
            // Product already exists in the cart
            // const updatedCart = [...state.cart] ;
            console.log("inside if block")
            let FeaturedProducts = {
                id : prodcutName,
                nameOfProduct : prodcutName,
                priceOfProduct : productPrice,
                productMainImage : firstImage,
                urlOfProduct : productUrl,
                productQuantiity : count,
            }
            return {
                // ...state,
                // cart: updatedCart
                cart : [FeaturedProducts]
            };
        }else {
            //if product already does not exist
            let FeaturedProducts = {
                id : prodcutName,
                nameOfProduct : prodcutName,
                priceOfProduct : productPrice,
                productMainImage : firstImage,
                urlOfProduct : productUrl,
                productQuantiity : count,
            }
            // console.log("FeaturedProducts" , FeaturedProducts)
            return {
                ...state ,
                cart : [...state.cart , FeaturedProducts]
            }
        }
        // console.log("FeaturedProducts",FeaturedProducts)
    }
    else if(action.type === "RESET_CART_COUNT"){
        return {
            ...state,
            cart:[]
        }
    }
    // else if(action.type === "REMOVE_FROM_CART"){
    //     return{
    //         ...state,
    //         cart : action.payload
    //     }
    // }

    return state;
}

export default CartReducer;