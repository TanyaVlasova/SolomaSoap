import React from 'react';
import m from './Shop.module.css'
import Product from "../../components/product/Product";
import product1 from '../../assets/shopImages/product1.jpg'
import product2 from '../../assets/shopImages/product2.jpg'
import product3 from '../../assets/shopImages/product3.jpg'
import product4 from '../../assets/shopImages/product4.jpg'
import product5 from '../../assets/shopImages/product5.jpg'
import product6 from '../../assets/shopImages/product6.jpg'
import product7 from '../../assets/shopImages/product7.jpg'
import product8 from '../../assets/shopImages/product8.jpg'
import product9 from '../../assets/shopImages/product9.jpg'
import product10 from '../../assets/shopImages/product10.jpg'
import product11 from '../../assets/shopImages/product11.jpg'
import product12 from '../../assets/shopImages/product12.jpg'
import product13 from '../../assets/shopImages/product13.jpg'
import product14 from '../../assets/shopImages/product14.jpg'
import product15 from '../../assets/shopImages/product15.jpg'
import product16 from '../../assets/shopImages/product16.jpg'
import product17 from '../../assets/shopImages/product17.jpg'
import product18 from '../../assets/shopImages/product18.jpg'
import product19 from '../../assets/shopImages/product19.jpg'
import product20 from '../../assets/shopImages/product20.jpg'


const Shop = (props) => {
    return (
        <div className={m.wrapper}>
            <div className={m.products}>
                <div className={m.item}>
                    <Product
                        image={product1}
                        product={'Набор "Свеча и 2 мыла"'}
                        price={'2600 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product2}
                        product={'Свеча в керамическом стакане (ментоловый глянец)'}
                        price={'от 1800 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product3}
                        product={'Свеча Vetiver'}
                        price={'1400 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product4}
                        product={'Свеча в керамическом стакане (коричневый шамот)'}
                        price={'от 1800 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product5}
                        product={'Juniper'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product6}
                        product={'Свеча в керамическом стакане (белая крапинка)'}
                        price={'от 1800 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product7}
                        product={'Salt'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product8}
                        product={'Castile'}
                        price={'450 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product9}
                        product={'Patchouli'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product10}
                        product={'Mango'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product11}
                        product={'Rosemary'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product12}
                        product={'Свеча "Mango and milk"'}
                        price={'1400 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product13}
                        product={'Charcoal'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product14}
                        product={'Raspberry'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product15}
                        product={'Свеча "Oud and Tonka"'}
                        price={'1400 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product16}
                        product={'Fig'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product17}
                        product={'Lemongrass'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product18}
                        product={'Chocolate'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product19}
                        product={'Lemon'}
                        price={'360 руб.'}
                    />
                </div>
                <div className={m.item}>
                    <Product
                        image={product20}
                        product={'Свеча Pumpkin Pie'}
                        price={'1400 руб.'}
                    />
                </div>
            </div>
        </div>
    );
};

export { Shop };