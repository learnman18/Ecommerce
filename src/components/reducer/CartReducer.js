const CartReducer = (state , action) => {

    if(action.type === "ADD_TO_CART"){
        const {prodcutName , productPrice, firstImage , productUrl, count}  = action.payload;
        // console.log(prodcutName , productPrice);

        let FeaturedProducts = {
            nameOfProduct : prodcutName,
            priceOfProduct : productPrice,
            productMainImage : firstImage,
            urlOfProduct : productUrl,
            productQuantiity : count,
        }

        // console.log("FeaturedProducts",FeaturedProducts)

        return {
            ...state ,
            cart : [...state.cart , FeaturedProducts]
        }
    }
    return state;
}

export default CartReducer;