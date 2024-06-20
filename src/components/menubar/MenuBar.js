import React, {useEffect, useState} from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";

const MenuBar = () => {
    const [isNavItemVisible, setNavItemVisibility] = useState(false);
    const {cart} = useCartContext();
    const [cartBadge , setCartBadge] = useState(cart)
    const { ProductCart } = useProductContext();


    useEffect(()=>{
        let z = cart.length;
        setCartBadge(z);
    },[cart])
    console.log("cart menu bar" , cartBadge)

    useEffect(()=>{
        const storedBadgeToken = JSON.parse(localStorage.getItem("cartCountStore"));
        if(storedBadgeToken){
            setCartBadge(storedBadgeToken);
        }
        console.log("storedBadgeToken" , storedBadgeToken);
    },[])
    console.log("cartBadge" , cartBadge)

    useEffect(()=>{
        if(cartBadge > 0){
            localStorage.setItem("cartCountStore" , JSON.stringify(cartBadge));
        }else if(cartBadge === 0){
            localStorage.removeItem('cartCountStore');
        }
    },[cartBadge])

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
                        <Link className="navbar-brand" to="/" onClick={LogoClick}>Navbar</Link>
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
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" onClick={handleNavItemClick}>Link</NavLink>
                                </li>
                            </ul>
                            {
                                cartBadge > 0 &&
                                <div className="navbar-brand">
                                    <Link to="cart" className="nav-link" onClick={handleNavItemClick}>
                                        <i className="bi bi-cart2 position-relative" style={{fontSize: "21px",fontWeight:"bold"}}>
                                            <span style={{fontSize:"9px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {
                                                    cartBadge > 0 ? 
                                                    <span>{cartBadge}</span> : ""
                                                }
                                            </span>
                                        </i>
                                        Cart
                                    </Link>
                                </div>
                            }
                            {
                                ProductCart.length > 0 &&
                                <div className="navbar-brand">
                                    <Link to="product-cart" className="nav-link" onClick={handleNavItemClick}>
                                        <i className="bi bi-cart2 position-relative" style={{fontSize: "21px",fontWeight:"bold"}}>
                                            <span style={{fontSize:"9px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {
                                                    ProductCart.length > 0 ? 
                                                    <span>{ProductCart.length}</span> : ""
                                                }
                                            </span>
                                        </i>
                                        Cart
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MenuBar