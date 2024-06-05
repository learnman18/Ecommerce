import React from "react";

export default function FilterDesktop (props) {

    const categories = new Set();
    if (props.allProductData) {
    props.allProductData.forEach((item) => {
        categories.add(item.category);
    });
    }

    return(
        <>
            <div>
                <div>
                    <input type="text" placeholder="search"/>
                </div>
                <div>
                    <p>Category</p>
                    <ul>
                    {[...categories].map((category) => (
                        <li key={category}>{category}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <button>Clear Filter</button>
                </div>
            </div>
        </>
    )
}