import React from 'react';
import m from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={m.wrapper}>
            <div className={m.container}>
                <div className={m.textBlock}>
                    <h2 className={m.h2}>
                        Наши контакты
                    </h2>
                    <p className={m.text}>
                        По вопросам корпоративных подарков и оптового прайса, пишите на почту.<br/><br/>
                        Мы всегда открыты к новым предложениям, сотрудничеству и конструктивной критике.
                        Не стесняйтесь и пишите нам, мы очень дорожим обратной связью от клиентов.
                    </p>
                    <h3 className={m.h3}>
                        Email
                    </h3>
                    <p className={m.text}>
                        soloma.soap@gmail.com
                    </p>
                    <h3 className={m.h3}>
                        Адрес
                    </h3>
                    <p className={m.text}>
                        Улица Первомайская 26а, г.Сочи
                    </p>
                </div>
                <div className={m.formBlock}>
                    <h2 className={m.h2}>
                        Напишите нам
                    </h2>
                    <form className={m.form} action={'#'} method={'get'}>
                        <div className={m.user}>
                            <div className={m.userData}>
                                <div>
                                    <input
                                        className={m.input}
                                        name={'name'}
                                        type={'text'}
                                        placeholder={'Имя *'}
                                        tabIndex={'1'}
                                        mozactionhint={'next'}
                                        autoComplete={'off'}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className={m.input}
                                        name={'email '}
                                        type={'email '}
                                        placeholder={'E-mail *'}
                                        tabIndex={'2'}
                                        autoComplete={'off'}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className={m.input}
                                        name={'city'}
                                        type={'text'}
                                        placeholder={'Откуда вы?'}
                                        tabIndex={'3'}
                                        autoComplete={'off'}
                                    />
                                </div>
                            </div>
                            <div className={m.userMessage}>
                                <textarea
                                    className={m.textarea}
                                    name="message"
                                    cols="30"
                                    rows="10"
                                    placeholder={'Сообщение *'}
                                    tabIndex={'4'}
                                    autoComplete={'off'}
                                    required>
                                </textarea>
                            </div>
                        </div>
                        <div className={m.buttonForm}>
                            <input
                                className={m.button}
                                type={"submit"}
                                value={'Отправить'}
                                tabIndex={'5'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { Contacts };