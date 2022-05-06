import React from 'react';
import m from './ProductSection.module.css'

const ProductSection = (props) => {
    return (
        <div className={m.wrapper}>
            <p className={m.product}>{props.product}</p>
            <img className={m.image} src={props.image} alt="image"/>
            <p className={m.productDescription}>{props.productDescription}</p>
        </div>
    );
};

export default ProductSection;