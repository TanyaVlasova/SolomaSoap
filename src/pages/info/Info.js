import React from 'react';
import m from './Info.module.css'
import info from '../../assets/infoImages/info.jpg'

const Info = () => {
    return (
        <div className={m.wrapper}>
            <div className={m.container}>
                <p className={m.text}>
                    Наша семейная мастерская варит мыло вот уже 10 лет! В своей работе мы используем только
                    простые и понятные, натуральные ингредиенты. Тщательно выбираем рецептуры, чтобы мыло
                    не сушило кожу, а свечи при горении не выделяли вредных веществ.
                    Мы обожаем все натуральное и хотим делиться этим с вами.
                </p>
                <div className={m.imageBlock}>
                    <img className={m.image} src={info} alt="image"
                    />
                </div>
            </div>
        </div>
    );
};

export { Info };