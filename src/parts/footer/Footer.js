import React from 'react';
import m from './Footer.module.css'
import icon from '../../assets/instagramIcon.png';

const Footer = (props) => {
    return (
        <div className={m.wrapper}>
            <div className={m.container}>
                <div className={m.mail}>
                    <p>для связи:</p>
                    <p>soloma.soap@gmail.com</p>
                </div>
                <p className={m.handmade}>Handmade organic</p>
                <div className={m.socialNetwork}>
                    <p className={m.link}>мы в соц.сетях:</p>
                    <a target={'_blank'} href={'https://www.instagram.com/solomasoap/'}>
                        <img className={m.icon} src={icon} alt="icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export { Footer };