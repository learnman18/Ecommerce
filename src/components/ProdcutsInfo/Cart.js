import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import HomePageCartPayment from "./HomePageCartPayment";

const Cart = () => {
    const { cart, ResetCartCount } = useCartContext();
    const [removeCartItem, setRemoveCartItem] = useState(cart);

    // removeCartItem.map((item)=>console.log("totalPriceSignleProd", item.totalPriceSignleProd));
    // console.log("cart" , cart);
    // console.log("removeCartItem" , removeCartItem)

    useEffect(() => {
        // console.log("Cart component mounted" , cart);
        // console.log("Initial cart state:", cart);
        const storedToken = JSON.parse(localStorage.getItem("cartLocalStore"));
        console.log("Cart loaded from localStorage:", storedToken);
        if (storedToken) {
            setRemoveCartItem(storedToken);
        }
    }, []);

    useEffect(() => {
        if (removeCartItem.length > 0) {
            localStorage.setItem("cartLocalStore", JSON.stringify(removeCartItem));
        } else if (removeCartItem.length === 0) {
            localStorage.removeItem('cartLocalStore');
        }
    }, [removeCartItem]);

    const cartIncrement = (productID) => {
        const updatedCart = removeCartItem.map((item) => {
            if (item.id === productID) {
                return { ...item, productQuantiity: item.productQuantiity + 1, totalPriceSignleProd: (item.productQuantiity + 1)  * item.priceOfProduct};
            }
            return item;
        });
        console.log("updatedCart updated:", updatedCart);
        setRemoveCartItem(updatedCart);
    };

    const cartDecrement = (productID) => {
        const updatedCart = removeCartItem.map((item) => {
            if (item.id === productID && item.productQuantiity > 1) {
                return { ...item, productQuantiity: item.productQuantiity - 1, totalPriceSignleProd: item.totalPriceSignleProd - item.priceOfProduct};
            }
            return item;
        });
        setRemoveCartItem(updatedCart);
    };

    const removeSingleItem = (itemToDelete) => {
        const deleteItem = removeCartItem.filter((item) => item.id.toLowerCase() !== itemToDelete.toLowerCase());
        console.log("deleteItem" , deleteItem)
        setRemoveCartItem(deleteItem);
        ResetCartCount(deleteItem);
    };

    const handleQuantityChange = (productID, newQuantity) => {
        if(/^\d*$/.test(newQuantity)){
            const updatedCart = removeCartItem.map((item) => {
                return item.id === productID ? { ...item, productQuantiity: Number(newQuantity) } : item;
            });
            setRemoveCartItem(updatedCart);
        }
    };

    return (
        <>
            <div className="cartParent" style={{marginTop: 80, display:"flex"}}>
                <div className="col-md-8">
                    <div className="card" style={{border: "none", background: "transparent" }}>
                        {removeCartItem.length > 0 ? (
                            <div className="card-body" style={{ paddingBottom: 0 }}>
                                {removeCartItem.map((cartItem) => (
                                    <div key={cartItem.nameOfProduct} className="cart-items">
                                        <div style={{ padding: "10px" }}>
                                            <div className="">
                                                <div className="d-flex" style={{ gridColumnGap: "40px" }}>
                                                    <a href={cartItem.urlOfProduct}>
                                                        <img src={cartItem.productMainImage} alt="" />
                                                    </a>
                                                    <div>
                                                        <div className="nameAndDeliverDate">
                                                            <div className="card-text productName">
                                                                {cartItem.nameOfProduct}
                                                            </div>
                                                            <div style={{ fontSize: 14, color: "#212121" }}>
                                                                Delivered in 2 days
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="price">
                                                                {/* {cartItem.productQuantiity === 1 ? cartItem.priceOfProduct : cartItem.totalPriceSignleProd} */}
                                                                {cartItem.totalPriceSignleProd}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-4" style={{ columnGap: "15px" }}>
                                                <div style={{display:"flex",gap:10}}>
                                                    <button className="cartCounter" onClick={() => cartDecrement(cartItem.id)}>-</button>
                                                    <input
                                                        type="text"
                                                        style={{width:30,textAlign:"center"}}
                                                        value={cartItem.productQuantiity }
                                                        onChange={(e) => handleQuantityChange(cartItem.id, e.target.value)}
                                                        readOnly
                                                    />
                                                    <button className="cartCounter" onClick={() => cartIncrement(cartItem.id)}>+</button>
                                                </div>
                                                <div>
                                                    <button onClick={() => removeSingleItem(cartItem.id)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <h3>No items in the cart</h3>
                        )}
                    </div>
                </div>
                {
                    removeCartItem.length >= 1 ? 
                        <div className="col-md-4">
                            <HomePageCartPayment allCartItem={removeCartItem}></HomePageCartPayment>
                        </div>
                    :
                    ""
                }
            </div>
        </>
    );
};

export default Cart;
