import React from "react";

const Footer = () => {
    return (
      <>
        <footer id="footer" className="footer">
            <div className="ecommerce container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-about">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>Ecommerce</span>
                        </a>
                        <p>
                            Cras fermentum odio eu feugiat lide par naso tierra. Justo
                            eget nada terra videa magna derita valies darta donna mare
                            fermentum iaculis eu non diam phasellus.
                        </p>
                    </div>

                    {/* <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>
                            <a href="#">Home</a>
                            </li>
                            <li>
                            <a href="#">About us</a>
                            </li>
                            <li>
                            <a href="#">Services</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                            <a href="#">Learing Purpose</a>
                            </li>
                            <li>
                            <a href="#">Learing Purpose</a>
                            </li>
                            <li>
                            <a href="#">Learing Purpose</a>
                            </li>
                        </ul>
                    </div> */}

                    {/* <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>India</p>
                        <p>Mumbai</p>
                        <p className="mt-4">
                            <strong>Phone:</strong> <span>+91 9876543210</span>
                        </p>
                        <p>
                            <strong>Email:</strong> <span>info@example.com</span>
                        </p>
                    </div> */}
                </div>  
            </div>

            <div className="container copyright text-center mt-4">
                <p>
                    © <span>Copyright</span> <strong className="px-1">Ecommerce</strong>{" "}
                    <span>All Rights Reserved</span>
                </p>
                <div className="credits">
                    Designed by <span>Ecommerce</span>
                </div>
            </div>
        </footer>
      </>
    );
}


export default Footer;