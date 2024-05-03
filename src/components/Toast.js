import React from "react";

const CartToast = (props) => {

    return (
        <>
            <div className={`alert alert-warning alert-dismissible fade ${props.displayALertMsg }`} role="alert">
                {props.selectedProductName} Product added to cart
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </>
    );
}

export default CartToast;