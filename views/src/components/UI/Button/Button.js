import React from 'react';
import {Link} from 'react-router-dom';
import style from './Button.module.scss';

const Button = (props) => {
    const {type, path, children, button, clicked} = props;


    if(button) return (
        <button className={style.Button} onClick={clicked} type={type}>{children}</button>
    )

    return (
        <Link to={path}><button className={style.Button}>
        {children}</button>
        </Link>
    )
}

export default Button;
