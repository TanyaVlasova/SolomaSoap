import React from 'react';
import m from './HeaderFooter.module.css'
import {Header} from "../../parts/header/Header";
import {Footer} from "../../parts/footer/Footer";
import {Outlet} from "react-router";

const HeaderFooter = (props) => {
    return (
        <div className={m.wrapper}>
            <Header/>
            <div className={m.otherPage}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export { HeaderFooter };