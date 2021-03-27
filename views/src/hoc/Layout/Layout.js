import React from 'react';
import style from './Layout.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
    return (
        <div className={style.Layout}>
            <Navigation/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;
