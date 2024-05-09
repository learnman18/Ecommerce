import React, {useEffect, useState} from "react";
import {useCartContext} from "../context/CartContext"

const Cart = () => {

    const [count , setCount] = useState(1);
    const {cart , ResetCartCount , RemoveFromCart} = useCartContext();
    const [removeCartItem , setRemoveCartItem] = useState(cart);
    // const [LSCart , setLSCart] = useState([]);


    useEffect(()=>{
        console.log("Cart component mounted");
        console.log("Initial cart state:", cart);
        const storedToken = JSON.parse(localStorage.getItem("cartLocalStore"));
        console.log("Cart loaded from localStorage:", storedToken);
        if(storedToken){
            setRemoveCartItem(storedToken);
        }
    },[])

    useEffect(()=>{
        console.log("Cart state changed:", removeCartItem);
        // localStorage.setItem("cartLocalStore" , JSON.stringify(removeCartItem))
        if(removeCartItem.length > 0){
            localStorage.setItem("cartLocalStore" , JSON.stringify(removeCartItem))
        }else if(removeCartItem.length === 0){
            localStorage.removeItem('cartLocalStore');
        }
    },[removeCartItem])


    useEffect(()=>{
        const onPageLoadItemCount = removeCartItem.map((item)=> item.productQuantiity);
        setCount(onPageLoadItemCount);
        // console.log("onPageLoadItemCount" , onPageLoadItemCount)
        // console.log("removeCartItem" , removeCartItem)
    },[removeCartItem])

    function cartIncrement() {
        const x = removeCartItem.map((getProductQunatity)=>{
            return getProductQunatity.productQuantiity += 1;
        })
        setCount(x);
    }

    function cartDecrement() {
        count > 1 && setCount(count - 1);
    }

    const removeSingleItem = (itemToDelete) => {
        
        let deleteItem = cart.filter((item)=> item.id.toLowerCase() !== itemToDelete.toLowerCase());
        console.log("deleteItem" , deleteItem)
        setRemoveCartItem(deleteItem);
        // AddToCart(deleteItem);
        ResetCartCount();
        setCount(0);
        // RemoveFromCart(deleteItem)

        // RemoveFromCart(deleteItem)
        // let deleteItem = cart.filter((item)=> item.id.toLowerCase() !== itemToDelete.toLowerCase())
        // setRemoveCartItem(deleteItem);
    }

    return(
        <>
            <div>
                <div className="card" style={{marginTop:80}}>
                    {
                        removeCartItem[0] ?
                        
                        <div className="card-body">
                            {
                                removeCartItem.map((cartItem)=>{
                                        return(
                                        <div key={cartItem.nameOfProduct}>
                                            <div className="">
                                                <div className="d-flex" style={{gridColumnGap:"40px"}}>
                                                    <a href={cartItem.urlOfProduct}>
                                                        <img src={cartItem.productMainImage} alt="" />
                                                    </a>
                                                    <div className="card-text">
                                                        {cartItem.nameOfProduct}
                                                    </div>
                                                    <div>
                                                        {cartItem.priceOfProduct}
                                                    </div>
                                                    <div>
                                                        Delivered in 2 days
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-4" style={{columnGap:"15px"}}>
                                                <div style={{marginBottom:"5px"}}>
                                                    <button className="cartCounter" onClick={cartDecrement}>-</button>
                                                    {/* <p className="count">{cartItem.productQuantiity + count - 1}</p> */}
                                                    <p className="count">{count}</p>
                                                    <button className="cartCounter" onClick={cartIncrement}>+</button>
                                                </div>
                                                <div>
                                                    <button onClick={()=>removeSingleItem(cartItem.id)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                 })
                            }
                        </div> : 

                        <h3>No items in the cart</h3>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart;