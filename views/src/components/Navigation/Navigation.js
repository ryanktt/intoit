import React from 'react';
import style from './Navigation.module.scss';
import Toolbar from './Toolbar/Toolbar';

const Navigation = () => {
    return (
        <div className={style.Navigation}>
            <Toolbar/>
        </div>
    )
}

export default Navigation;
