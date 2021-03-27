import React from 'react';
import style from './Toolbar.module.scss';
import logo from '../../../assets/courses-logo.png';
import Button from '../../UI/Button/Button';

const Toolbar = () => {
    return (
        <div className={style.Toolbar}>
            <img className={style.Logo} src={logo}/>
            <div class={style.Btn}><Button>Login</Button></div>
        </div>
    )
}

export default Toolbar;
