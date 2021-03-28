import React from 'react';
import {Link} from 'react-router-dom';
import style from './Button.module.scss';

const Button = (props) => {
    const {type, path, children} = props;
    return (
        <Link to='/auth/login'><button className={style.Button}>
        {children}</button>
        </Link>
    )
}

export default Button;
