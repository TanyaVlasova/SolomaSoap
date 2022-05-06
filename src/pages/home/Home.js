import React from 'react';
import m from './Home.module.css'
import Button from "../../components/button/Button";
import ProductSection from "../../components/productSection/ProductSection";
import soap from '../../assets/homeImages/soap.jpg'
import candles from '../../assets/homeImages/candles.jpg'
import boxes from '../../assets/homeImages/boxes.jpg'
import about from '../../assets/homeImages/about.jpg'
import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <div className={m.wrapper}>

            <section className={m.firstSection}>
                <div className={m.imageFirstSection}>
                    <div className={m.containerFirstSection}>
                        <p className={m.textFirstSection}>
                            Мыло и свечи как признание в любви... к себе.
                        </p>
                        <div className={m.buttonFirstSection}>
                            <NavLink to={'/shop'}>
                                <Button text={'Сделать заказ'}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className={m.secondSection}>
                <nav className={m.containerSecondSection}>
                    <div className={m.itemSecondSection}>
                        <ProductSection
                            product={'Мыло'}
                            image={soap}
                            productDescription={'Коллекция натурального мыла с нуля, более 20 сортов.'}
                        />
                    </div>
                    <div className={m.itemSecondSection}>
                        <ProductSection
                            product={'Свечи'}
                            image={candles}
                            productDescription={'Коллекция свечей из кокосового воска с деревянными и хлопковыми фитилями.'}
                        />
                    </div>
                    <div className={m.itemSecondSection}>
                        <ProductSection
                            product={'Подарочные наборы'}
                            image={boxes}
                            productDescription={'Наборы мыла и свечей в деревянных коробках, идеально подойдут для подарка.'}
                        />
                    </div>
                </nav>
            </section>

            <section className={m.thirdSection}>
                <div className={m.containerThirdSection}>
                    <div className={m.blockThirdSection}>
                        <p className={m.aboutTextThirdSection}>
                            Мы бесконечно влюблены<br/>
                            в то, что мы делаем.
                        </p>
                        <p className={m.authorTextThirdSection}>
                            Анна Соломатова | Основатель
                        </p>
                        <div className={m.buttonThirdSection}>
                            <NavLink to={'/info'}>
                                <Button text={'Больше о нас'}/>
                            </NavLink>
                        </div>
                    </div>
                    <div className={m.imageBlockThirdSection}>
                        <img className={m.imageThirdSection} src={about} alt="image"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export { Home };