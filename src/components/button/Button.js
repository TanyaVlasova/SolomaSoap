import React from 'react';
import m from './Button.module.css'

const Button = (props) => {
    return (
        <div className={m.wrapper}>
            <button className={m.button}>{props.text}</button>
        </div>
    );
};

export default Button;