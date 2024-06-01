import React from "react";

const AllProducts = () => {
    return(
        <>
            <div style={{marginTop:"80px"}}>
                <div className="row">
                    <div className="col-md-12 d-flex productPage">
                        <div className="col-md-3">
                            {/* start - For laptop and desktop */}
                            <div className="d-md-block d-none">
                                <div>
                                    <input type="text" placeholder="search"/>
                                </div>
                                <div>
                                    <p>Category</p>
                                    <ul>
                                        <li>Mobile</li>
                                        <li>Computer</li>
                                        <li>Computer</li>
                                        <li>Computer</li>
                                        <li>Computer</li>
                                    </ul>
                                </div>
                                <div>
                                    <button>Clear Filter</button>
                                </div>
                            </div>
                            {/* end - For laptop and desktop */}
                            {/* start - For Mobiles */}
                            <div className="d-block d-md-none">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Filter the products
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse hide" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div>
                                                    <input type="text" placeholder="search"/>
                                                </div>
                                                <div>
                                                    <p>Category</p>
                                                    <ul>
                                                        <li>Mobile</li>
                                                        <li>Computer</li>
                                                        <li>Computer</li>
                                                        <li>Computer</li>
                                                        <li>Computer</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <button>Clear Filter</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end - For Mobiles */}
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title 
                                    and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts;