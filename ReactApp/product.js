import React from "react";
const Product=(props)=>{
    return(
        <div className='product'>
            <h1>{props.name}</h1>
            <p>Price: {props.price}</p>
        </div>
    );
}
export default Product;
