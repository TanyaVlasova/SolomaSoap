import React from 'react';
import m from './NotFound.module.css'

const NotFound = (props) => {
    return (
        <div className={m.wrapper}>
            <p>Error <span>404</span></p>
            <p>Page Not Found</p>
        </div>
    );
};

export { NotFound };