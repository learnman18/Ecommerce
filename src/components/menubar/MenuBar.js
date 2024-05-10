import React, {useState} from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const MenuBar = () => {
    const [isNavItemVisible, setNavItemVisibility] = useState(false);
    const {cart} = useCartContext();

    const handleNavItemClick = () => {
        console.log(isNavItemVisible)
        isNavItemVisible ? setNavItemVisibility(false) : setNavItemVisibility(true)
    };

    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{padding:"15px 0"}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
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
                            <div className="navbar-brand">
                                <Link to="cart" className="nav-link" onClick={handleNavItemClick}>
                                    <i className="bi bi-cart2 position-relative" style={{fontSize: "21px",fontWeight:"bold"}}>
                                        <span style={{fontSize:"9px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {
                                                cart.length > 0 ? 
                                                <span>{cart.length}</span> : ""
                                            }
                                        </span>
                                    </i>
                                    Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MenuBar