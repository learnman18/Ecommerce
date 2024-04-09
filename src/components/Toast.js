import React from "react";

const CartToast = (props) => {

    return (
        <>
            <div className={`alert alert-warning alert-dismissible fade ${props.displayALertMsg }`} role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    );
}

export default CartToast;