import React, {useEffect, useState} from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";
import { useBadgeContext } from "../context/BadgeContextProvider";

const MenuBar = () => {
    const [isNavItemVisible, setNavItemVisibility] = useState(false);
    const {cart} = useCartContext();
    // const [cartBadge , setCartBadge] = useState()
    // const [productCartBadge , setProductCartBadge] = useState()
    const { ProductCart} = useProductContext();
    const { cartBadge, productCartBadge } = useBadgeContext();
    const [totalBadge , setTotalBadge] = useState();

    console.log("cart", cart);
    console.log("productCart" , ProductCart)

    useEffect(()=>{
        setTotalBadge(cartBadge + productCartBadge)
    },[cartBadge, productCartBadge])

/*
    We can use a single state variable to work on both cartBadge, but here we have two different cart page one is for cart and another
    one is for product cart page, so we will be writing two code. this can be accomplished using one state only if there was single page.
*/

    // useEffect(()=>{
    //     let z = cart.length;
    //     setCartBadge(z);
    // },[cart])
    // console.log("cart menu bar" , cartBadge)

    // useEffect(()=>{
    //     const storedBadgeToken = JSON.parse(localStorage.getItem("cartCountStore"));
    //     if(storedBadgeToken){
    //         setCartBadge(storedBadgeToken);
    //     }
    //     console.log("storedBadgeToken" , storedBadgeToken);
    // },[])
    // console.log("cartBadge" , cartBadge)

    // useEffect(()=>{
    //     if(cartBadge > 0){
    //         localStorage.setItem("cartCountStore" , JSON.stringify(cartBadge));
    //     }else if(cartBadge === 0){
    //         localStorage.removeItem('cartCountStore');
    //     }
    // },[cartBadge])

    // //Product cart

    // useEffect(()=>{
    //     let z = ProductCart.length;
    //     setProductCartBadge(z);
    // },[ProductCart])
    // console.log("cart menu bar" , productCartBadge)

    // useEffect(()=>{
    //     const storedProductBadgeToken = JSON.parse(localStorage.getItem("productCartCountStore"));
    //     if(storedProductBadgeToken){
    //         setProductCartBadge(storedProductBadgeToken);
    //     }
    //     console.log("storedProductBadgeToken" , storedProductBadgeToken);
    // },[])
    // console.log("productCartBadge" , productCartBadge)

    // useEffect(()=>{
    //     if(productCartBadge > 0){
    //         localStorage.setItem("productCartCountStore" , JSON.stringify(productCartBadge));
    //     }else if(productCartBadge === 0){
    //         localStorage.removeItem('productCartCountStore');
    //     }
    // },[productCartBadge])

    //Navbar show and hide on toggle and click

    const handleNavItemClick = () => {
        // console.log(isNavItemVisible)
        isNavItemVisible ? setNavItemVisibility(false) : setNavItemVisibility(true)
    };

    const LogoClick = () => {
        isNavItemVisible && setNavItemVisibility(false)
    }

    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{padding:"15px 0"}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand ecommerce" to="/"  onClick={LogoClick}>Ecommerce</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={handleNavItemClick} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">   
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isNavItemVisible ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" onClick={handleNavItemClick} to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" onClick={handleNavItemClick} to="products">Products</NavLink>
                                </li>
                            </ul>
                            {
                                
                                <div className="navbar-brand">
                                    <Link to="cart" className="nav-link" onClick={handleNavItemClick}>
                                        <i className="bi bi-cart2 position-relative" style={{fontSize: "21px",fontWeight:"bold"}}>
                                            <span style={{fontSize:"9px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {
                                                    totalBadge > 0 ? 
                                                    <span>{totalBadge}</span> : ""
                                                }
                                            </span>
                                        </i>
                                        Cart
                                    </Link>
                                </div>
                            }
                            {/* {
                                productCartBadge > 0 &&
                                <div className="navbar-brand">
                                    <Link to="product-cart" className="nav-link" onClick={handleNavItemClick}>
                                        <i className="bi bi-cart2 position-relative" style={{fontSize: "21px",fontWeight:"bold"}}>
                                            <span style={{fontSize:"9px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {
                                                    productCartBadge > 0 ? 
                                                    <span>{productCartBadge}</span> : ""
                                                }
                                            </span>
                                        </i>
                                        Cart
                                    </Link>
                                </div>
                            } */}
                            {/* {
                                (!ProductCart || !cartBadge) &&
                                <div className="navbar-brand">
                                    <Link to="product-cart" className="nav-link" onClick={handleNavItemClick}>
                                        <i className="bi bi-cart2 position-relative" style={{fontSize: "21px",fontWeight:"bold"}}></i>
                                        Cart
                                    </Link>
                                </div>
                            } */}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MenuBar