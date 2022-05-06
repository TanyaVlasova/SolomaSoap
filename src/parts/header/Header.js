import React from 'react';
import m from './Header.module.css'
import logo from '../../assets/logo.jpg';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
            <div className={m.wrapper}>
                <NavLink className={m.image} to={'/home'}>
                    <img className={m.logo} src={logo} alt="Soloma Soap"/>
                </NavLink>
                <nav className={m.menu}>
                    <ul>
                        <li><NavLink to={'/home'}>Главная</NavLink></li>
                        <li><NavLink to={'/shop'}>Магазин</NavLink></li>
                        <li><NavLink to={'/info'}>Инфо</NavLink></li>
                        <li><NavLink to={'/contacts'}>Контакты</NavLink></li>
                    </ul>
                </nav>
            </div>
    );
};

export { Header };