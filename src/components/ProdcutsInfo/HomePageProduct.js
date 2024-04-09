import React, { useState } from "react";
import {useCartContext} from "../context/CartContext"
import CartToast from "../Toast";

const HomePageProducts = ({prodcutName , productDescription , firstImage , secondImage , thirdImage , mainImage , productID , productPrice}) => {

    const [count , setCount] = useState(1);
    const [alertForCartItem , setAlertForCartItem] = useState("hide")
    const {AddToCart} = useCartContext() //custom hook created
    const productUrl = window.location.pathname;

    function CartIncrement() {
        setCount(count + 1);
    }

    function CartDecrement() {
        count > 1 && setCount(count - 1);
    }

    const displayTheMainImg = (event) => {
        let mainImg = document.querySelector(".biggerImage img");
        let getSrc = event.target.getAttribute("src")
        mainImg.setAttribute("src" , getSrc);
    }

    const AlertMsg = () => {
        alertForCartItem === "hide" ? setAlertForCartItem("show") : setAlertForCartItem("hide");
    }

return(
    <>
        <div className="row" key={productID}>
            <div className="col-12 col-sm-12 col-md-6">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center">
                        <div className="d-flex flex-column">
                            <img src={firstImage} style={{margin:"5px"}} alt="box1" onClick={displayTheMainImg}/>
                            <img src={secondImage} style={{margin:"5px"}} alt="box2" onClick={displayTheMainImg}/>
                            <img src={thirdImage} style={{margin:"5px"}} alt="box3" onClick={displayTheMainImg}/>
                        </div>
                        <div className="biggerImage">
                            <img src={mainImage} style={{height:"285px",width:"302px"}} alt="product box" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
                <div className="">

                    {/* {
                        cartItems.map((item , index)=>{
                            return <p key={index}>{item.prodcutName} and {item.productPrice}</p>
                        })
                    } */}

                    <h3>{prodcutName}</h3>
                    <p>{productDescription}</p>
                    <p>Brand : Apple</p>
                    <p>Price : {productPrice}</p>
                    <div style={{marginBottom:"5px"}}>
                        <button className="cartCounter" onClick={CartDecrement}>-</button>
                        <p className="count">{count}</p>
                        <button className="cartCounter" onClick={CartIncrement}>+</button>
                    </div>
                    <button className="btn btn-warning" onClick={()=> {
                        AddToCart(prodcutName , productPrice, firstImage, productUrl , count);
                        AlertMsg();
                    }}>Add to cart</button>
                </div>
            </div>
        </div>
        <div>
            <CartToast displayALertMsg={alertForCartItem}></CartToast>
        </div>
    </>
)
}

export default HomePageProducts;