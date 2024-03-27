import React from "react";
import firstImg from "../Images/features-light-1.jpg"
import coverImg from "../Images/features-light-2.jpg"
import "../style.css"
import FeaturedItems from "./FeaturedServices";
import Footer from "../Footer/Footer";

const LandingPage = () => {

    return(
        <>
            <div className="row gy-4 align-items-center features-item">
                <div className="col-lg-5 order-2 order-lg-1 aos-init" data-aos="fade-up" data-aos-delay="200">
                    <h3>Corporis temporibus maiores provident</h3>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <a href="/" className="btn btn-get-started">Get Started</a>
                </div>
                <div className="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                    <div className="image-stack">
                    <img src={firstImg} alt="" className="stack-front" />
                    <img src={coverImg} alt="" className="stack-back" />
                    </div>
                </div>
            </div>
            <FeaturedItems></FeaturedItems>
            <Footer></Footer>
        </>
    )
}

export default LandingPage;