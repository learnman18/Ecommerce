import React from "react";
import firstImg from "../Images/features-light-1.jpg"
import coverImg from "../Images/features-light-2.jpg"
import "../style.css"
import FeaturedItems from "./FeaturedServices";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {

    return(
        <>
            <div className="row gy-4 align-items-center features-item" style={{paddingBottom:"60px"}}>
                <div className="col-lg-5 order-2 order-lg-1 aos-init" data-aos="fade-up" data-aos-delay="200">
                    <h3>Brwose, some of your favourite products</h3>
                    <p>
                    We're thrilled to have you here. At Ecommerce, we offer a wide range of products to cater to all your needs. 
                    Whether you're looking for the latest fashion trends, essential home goods, cutting-edge electronics, 
                    or unique gifts, we've got you covered.
                    </p>
                    <Link to="/products" className="btn btn-get-started">Get Started</Link>
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