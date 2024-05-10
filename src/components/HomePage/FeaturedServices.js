import React, { useEffect , useState } from "react";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"

import FeaturedProducts from "./FeatuerdProducts"
import { Link } from "react-router-dom";

const FeaturedItems = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const positioning = {
        position : "absolute",
        left : "0px",
        top : "0px"
    }
    const parentPosition = {
        position:"relative",
        height:"1079.31px"
    }

    // console.log("FeaturedProducts" , FeaturedProducts)

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    useEffect(()=>{
    const featureItems = document.getElementsByClassName("isotope-item");
    const feaureContainer = document.querySelector(".isotope-container");
        const screenResize = () => {
            if(screenWidth > 1200 && screenWidth < 1400){
                console.log("inside 1200 to 1400");
                feaureContainer.style.height = "1079.31px";
                featureItems[1].style.left = "379.99px";
                featureItems[2].style.left = "759.98px";
                featureItems[3].style.left = "759.98px";
                featureItems[3].style.top = "224.24px";
                featureItems[4].style.left = "379.99px";
                featureItems[4].style.top = "262.688px";
                featureItems[5].style.top = "384.875px";
                featureItems[6].style.left = "759.98px";
                featureItems[6].style.top = "483.636px";
                featureItems[7].style.left = "759.98px";
                featureItems[7].style.top = "738.709px";
                featureItems[8].style.left = "379.99px";
                featureItems[8].style.top = "818.834px";
            }if(screenWidth >= 1400){
                console.log("inside more than 1400");
                feaureContainer.style.height = "1249.13px";
                featureItems[1].style.left = "439.988px";
                featureItems[2].style.left = "879.976px";
                featureItems[3].style.left = "879.976px";
                featureItems[3].style.top = "257.993px";
                featureItems[4].style.left = "439.988px";
                featureItems[4].style.top = "302.924px";
                featureItems[5].style.top = "445.725px";
                featureItems[6].style.left = "879.976px";
                featureItems[6].style.top = "557.074px";
                featureItems[7].style.left = "879.976px";
                featureItems[7].style.top = "851.109px";
                featureItems[8].style.left = "439.988px";
                featureItems[8].style.top = "948.787px";
            }if(screenWidth <= 768){
                console.log("inside less than 768");
                feaureContainer.style.height="3096.2px"
                featureItems[1].style.top = "395.021px";
                featureItems[2].style.top = "664.417px";
                featureItems[3].style.top = "894.292px";
                featureItems[4].style.top = "1160.3px";
                featureItems[5].style.top = "1731.41px";
                featureItems[6].style.top = "2299.66px";
                featureItems[7].style.top = "2561.23px";
                featureItems[8].style.top = "2829.07px";
            }if(screenWidth > 768 && screenWidth < 992){
                console.log("inside 768 to 992");
                feaureContainer.style.height="1477.84px";
                featureItems[1].style.left = "360px";
                featureItems[2].style.left = "360px";
                featureItems[3].style.left = "249.281px";
                featureItems[3].style.top = "364.615px";
                featureItems[4].style.left = "360px";
                featureItems[4].style.top = "462.281px";
                featureItems[5].style.top = "610.792px";
                featureItems[6].style.left = "360px";
                featureItems[6].style.top = "988.541px";
                featureItems[7].style.top = "1134.44px";
                featureItems[8].style.left = "360px";
                featureItems[8].style.top = "1230.64px";
            }if(screenWidth >= 992 && screenWidth < 1200){
                console.log("inside more than 992 to 1200");
                feaureContainer.style.height="909.563px";
                featureItems[1].style.left = "319.992px";
                featureItems[2].style.left = "639.984px";
                featureItems[3].style.left = "639.984px";
                featureItems[3].style.top = "190.492px";
                featureItems[4].style.left = "319.992px";
                featureItems[4].style.top = "222.458px";
                featureItems[5].style.top = "324.058px";
                featureItems[6].style.left = "639.984px";
                featureItems[6].style.top = "410.209px";
                featureItems[7].style.left = "639.984px";
                featureItems[7].style.top = "626.342px";
                featureItems[8].style.left = "319.992px";
                featureItems[8].style.top = "688.916px";
            }
        }  

        screenResize();
    },[screenWidth])      


    // const newTabProduct = (prodName) => {
    //     window.open(`selectedProdcuts/${prodName}`, "_blank");
    // }

    return(
        <>
            <div className="mt-5 featured">
                <div className="container section-title">
                    <h2>Portfolio</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div> 
                <div className="compTwoContainer mt-5">
                    <div className="row gy-4 isotope-container" style={parentPosition}>
                        {
                            FeaturedProducts.map((curItem , index)=>{
                                return(
                                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app" key={index} style={positioning}>
                                        <img src={curItem.imageName} className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>{curItem.productName}</h4>
                                            <p>{curItem.productDescription}</p>
                                            <a href={curItem.imageName} title="App 1"  className="glightbox preview-link">
                                                <i className="bi bi-zoom-in"></i>
                                            </a>
                                            <Link to={`selectedProdcuts/${curItem.productName}`} title="More Details"  className="details-link">
                                                <i className="bi bi-link-45deg"></i>
                                            </Link>
                                            {/* <span className="details-link" onClick={()=>{
                                                newTabProduct(curItem.productName)
                                            }}>
                                                <i className="bi bi-link-45deg"></i>
                                            </span>                                             */}
                                        </div>
                                    </div>
                                )  
                            })
                        }
                    </div>
                </div>
            </div>    
        </>
    )
}

export default FeaturedItems;