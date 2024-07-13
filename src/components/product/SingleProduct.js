import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useProductContext} from "../context/ProductContext"

const SingleProduct = () => {

    const [product , setProduct] = useState();
    // const [itemCount , setItemCount] = useState(1);
    const {AddCartItem} = useProductContext();

    const {singleProd} = useParams();
    // console.log("ProductCart" , ProductCart)
    let decodeTheURL = decodeURIComponent(singleProd);
    const productUrl = window.location.pathname;

    useEffect(()=>{
        axios.get(`https://api.pujakaitem.com/api/products`)
        .then((response)=>{
            console.log("response prod" , response.data);
            setProduct(response.data);
        })
        .catch((err)=>console.log("error" , err));
    },[])

    const itemCount = 1;

    // const productCartIncrement = () => {
    //     setItemCount((prevCount) => Number(prevCount) + Number(1));
    //   };
    
    // const productCartDecrement = () => {
    //     setItemCount((prevCount) => (prevCount > 1 ? Number(prevCount) - Number(1) : prevCount));
    // };

    return(
        <>
            <div style={{marginTop:"80px"}}>
                {
                    product && 
                    product.map((item)=>(
                        item.name === decodeTheURL &&
                            <div className="row" key={item.id} style={{marginLeft:0,marginRight:0}}>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-column">
                                                <img src="" style={{margin:"5px"}} alt="box1"/>
                                                <img src="" style={{margin:"5px"}} alt="box2"/>
                                                <img src="" style={{margin:"5px"}} alt="box3"/>
                                            </div>
                                            <div className="biggerImage">
                                                <img src={item.image} style={{height:"285px",width:"302px"}} alt="product box" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div className="singleProductInfo">
                                        <h3 style={{textTransform:"capitalize"}}>{item.name}</h3>
                                        <p className="productInfo">{item.description}</p>
                                        <p className="productInfo" style={{paddingTop:15}}>Brand : {item.company}</p>
                                        <p className="productInfo" style={{paddingBottom:15}}>Price : {item.price}</p>
                                        {/* <div style={{marginBottom:"5px"}}>
                                            <button className="cartCounter" onClick={productCartDecrement}>-</button>
                                            <p className="count">{itemCount}</p>
                                            <button className="cartCounter" onClick={productCartIncrement}>+</button>
                                        </div> */}
                                        <button className="btn btn-warning" onClick={()=> {
                                            AddCartItem(item.id, item.name, item.price, item.company, item.image, productUrl, itemCount, item.category);
                                        }}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>
        </>
    )
}

export default SingleProduct;