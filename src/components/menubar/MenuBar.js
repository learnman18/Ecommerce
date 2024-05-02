import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const MenuBar = () => {

    const {cart} = useCartContext();
    // const [resetCartCount , setResetCartCount] = useState(cart)
    // const [cartItemCountLength , setCartItemCountLength] = useState(cart)

    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{padding:"15px 0"}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Link</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="cart" className="nav-link">
                                        <i className="bi bi-cart2 position-relative" style={{fontSize: "21px",fontWeight:"bold"}}>
                                            <span style={{fontSize:"9px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {
                                                    cart.map((cartItemCount , index)=>{
                                                        return(
                                                            <span key={index}>{cartItemCount.productQuantiity}</span>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </i>
                                        <span>Cart</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MenuBar