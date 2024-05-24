import React, { useState } from "react";
import {useCartContext} from "../context/CartContext"
import CartToast from "../Toast";

const HomePageProducts = ({prodcutName , productDescription , firstImage , secondImage , thirdImage , mainImage , productID , productPrice}) => {

    const [alertForCartItem , setAlertForCartItem] = useState("hide")
    const {AddToCart } = useCartContext() //custom hook created
    const [count , setCount] = useState(1);
    const productUrl = window.location.pathname;

    const CartIncrement = () => {
        setCount((prevCount) => Number(prevCount) + Number(1));
      };
    
    const CartDecrement = () => {
        setCount((prevCount) => (prevCount > 1 ? Number(prevCount) - Number(1) : prevCount));
    };

    const displayTheMainImg = (event) => {
        let mainImg = document.querySelector(".biggerImage img");
        let getSrc = event.target.getAttribute("src")
        mainImg.setAttribute("src" , getSrc);
    }

    const AlertMsg = () => {
        // alertForCartItem === "hide" ? setAlertForCartItem("show") : setAlertForCartItem("hide");
        alertForCartItem === "hide" && setAlertForCartItem("show");
    }
    function HideAlertMsg() {
        alertForCartItem === "show" && setAlertForCartItem("hide");
    }
    setTimeout(HideAlertMsg , 2000)

return(
    <>
        <div>
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
                            AddToCart(prodcutName , productPrice, firstImage, productUrl, count);
                            AlertMsg();
                        }}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div style={{position:"absolute",right:"20px"}}>
                <CartToast displayALertMsg={alertForCartItem}  selectedProductName={prodcutName}></CartToast>
            </div>
        </div>
    </>
)
}

export default HomePageProducts;