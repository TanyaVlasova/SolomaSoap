import React from 'react';
import m from './Product.module.css'

const Product = (props) => {
    return (
        <div className={m.wrapper}>
            <img className={m.image} src={props.image} alt="image"/>
            <div className={m.text}>
                <p className={m.product}>{props.product}</p>
                <p className={m.price}>{props.price}</p>
            </div>
        </div>
    );
};

export default Product;