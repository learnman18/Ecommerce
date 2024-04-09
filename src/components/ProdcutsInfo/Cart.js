import React, {useState} from "react";
import {useCartContext} from "../context/CartContext"

const Cart = () => {

    const [count , setCount] = useState(1);
    const {cart} = useCartContext();
    console.log("cart" , cart)

    function cartIncrement() {
        setCount(count + 1);
    }

    function cartDecrement() {
        count > 1 && setCount(count - 1);
    }

    return(
        <>
            <div>
                <div className="card" style={{marginTop:80}}>
                    {
                        cart[0] ?

                        <div className="card-body">
                            {
                                cart.map((cartItem)=>{
                                        return(
                                        <div>
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
                                                    <p className="count">{count}</p>
                                                    <button className="cartCounter" onClick={cartIncrement}>+</button>
                                                </div>
                                                <div>
                                                    <button>
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