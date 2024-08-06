import React from "react";
import "../Footer/cartFooter.css"
import { Link } from "react-router-dom";

export default function CartFooter(){
    return(
        <React.Fragment>
            <footer className="mainCartFooter">
                <div className="cartFooter">
                    <div>
                        <div>
                            <div className="footerItems">
                                <div className="col col-8-12">
                                    <span>
                                        <span className="policies-title footertitle">Policies:</span>
                                        <Link className="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Returns Policy</Link>
                                        <Link className="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Terms of use</Link>
                                        <Link className="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Security</Link>
                                        <Link className="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Privacy</Link>
                                        <Link className="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Infringement</Link>
                                        </span><span className="_1mBSCr">© 2024 <span>Ecommerce.com</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}