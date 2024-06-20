import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import ProductCartPayment from "./ProductCartPayment";

const ProductInsideCart = () => {
    const { ProductCart , ResetCartCount } = useProductContext();
    const [removeProductCart, setRemoveProductCart] = useState(ProductCart);
    console.log("ProductCart" ,ProductCart)
    console.log("removeProductCart" ,removeProductCart)

    // removeProductCart.map((item)=>console.log("totalPriceOfSingleProduct", item.totalPriceOfSingleProduct))
    removeProductCart.map((item)=>console.log("totalPriceOfSingleProduct", item))

    useEffect(() => {
        // console.log("Cart component mounted" , ProductCart);
        // console.log("Initial cart state:", ProductCart);
        const storedToken = JSON.parse(localStorage.getItem("productCartLocalStore"));
        console.log("Cart loaded from localStorage:", storedToken);
        if (storedToken) {
            setRemoveProductCart(storedToken);
        }
    }, []);

    useEffect(() => {
        if (removeProductCart.length > 0) {
            localStorage.setItem("productCartLocalStore", JSON.stringify(removeProductCart));
        } else if (removeProductCart.length === 0) {
            localStorage.removeItem('productCartLocalStore');
        }
    }, [removeProductCart]);

    const productCartIncrement = (productID) => {
        const updatedCart = removeProductCart.map((item) => {
            if (item.id === productID) {
                return { ...item, singleProductQuantity: item.singleProductQuantity + 1, totalPriceOfSingleProduct: (item.singleProductQuantity + 1)  * item.itemPrice};
            }
            return item;
        });
        console.log("updatedCart updated:", updatedCart);
        setRemoveProductCart(updatedCart);
    };

    const productCartDecrement = (productID) => {
        const updatedCart = removeProductCart.map((item) => {
            if (item.id === productID && item.singleProductQuantity > 1) {
                return { ...item, singleProductQuantity: item.singleProductQuantity - 1, totalPriceOfSingleProduct: item.totalPriceOfSingleProduct - item.priceOfProduct};
            }
            return item;
        });
        console.log("updatedCart" , updatedCart)
        setRemoveProductCart(updatedCart);
    };

    const removeSingleItem = (itemToDelete) => {
        const deleteItem = removeProductCart.filter((item) => item.id.toLowerCase() !== itemToDelete.toLowerCase());
        console.log("deleteItem" , deleteItem)
        setRemoveProductCart(deleteItem);
        ResetCartCount(deleteItem);
    };

    const handleQuantityChange = (productID, newQuantity) => {
        if(/^\d*$/.test(newQuantity)){
            const updatedCart = removeProductCart.map((item) => {
                return item.id === productID ? { ...item, singleProductQuantity: Number(newQuantity) } : item;
            });
            setRemoveProductCart(updatedCart);
        }
    };

    return (
        <>
            <div className="cartParent" style={{marginTop: 80, display:"flex"}}>
                <div className="col-md-8">
                    <div className="card" style={{border: "none", background: "transparent" }}>
                        {removeProductCart.length > 0 ? (
                            <div className="card-body" style={{ paddingBottom: 0 }}>
                                {removeProductCart.map((cartItem) => (
                                    <div key={cartItem.id} className="cart-items">
                                        <div style={{ padding: "10px" }}>
                                            <div className="">
                                                <div className="d-flex" style={{ gridColumnGap: "40px" }}>
                                                    <a href={cartItem.urlOfProduct}>
                                                        <img src={cartItem.productImage} height={100} width={100} alt="" />
                                                    </a>
                                                    <div>
                                                        <div className="nameAndDeliverDate">
                                                            <div className="card-text productName">
                                                                {cartItem.itemName}
                                                            </div>
                                                            <div style={{ fontSize: 14, color: "#212121" }}>
                                                                Delivered in 2 days
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="price">
                                                                {/* {cartItem.singleProductQuantity === 1 ? cartItem.priceOfProduct : cartItem.totalPriceOfSingleProduct} */}
                                                                {cartItem.totalPriceOfSingleProduct}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-4" style={{ columnGap: "15px" }}>
                                                <div style={{display:"flex",gap:10}}>
                                                    <button className="cartCounter" onClick={() => productCartDecrement(cartItem.id)}>-</button>
                                                    <input
                                                        type="text"
                                                        style={{width:30,textAlign:"center"}}
                                                        value={cartItem.singleProductQuantity }
                                                        onChange={(e) => handleQuantityChange(cartItem.id, e.target.value)}
                                                        readOnly
                                                    />
                                                    <button className="cartCounter" onClick={() => productCartIncrement(cartItem.id)}>+</button>
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
                    removeProductCart.length >= 1 ? 
                        <div className="col-md-4">
                            <ProductCartPayment allProductCartItem={removeProductCart}></ProductCartPayment>
                        </div>
                    :
                    ""
                }
            </div>
        </>
    );
};

export default ProductInsideCart;
