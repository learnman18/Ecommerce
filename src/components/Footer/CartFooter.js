import React from "react";
import "../Footer/cartFooter.css"
import { Link } from "react-router-dom";

export default function CartFooter(){
    return(
        <React.Fragment>
            <footer class="mainCartFooter">
                <div class="cartFooter">
                    <div>
                        <div>
                            <div class="footerItems">
                                <div class="col col-8-12">
                                    <span>
                                        <span class="policies-title footertitle">Policies:</span>
                                        <Link class="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Returns Policy</Link>
                                        <Link class="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Terms of use</Link>
                                        <Link class="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Security</Link>
                                        <Link class="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Privacy</Link>
                                        <Link class="Pyr2uI" to="" target="_blank" rel="noopener noreferrer">Infringement</Link>
                                        </span><span class="_1mBSCr">© 2024 <span>Ecommerce.com</span>
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