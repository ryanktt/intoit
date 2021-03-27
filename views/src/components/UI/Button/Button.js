import React from 'react';
import style from './Button.module.scss';

const Button = (props) => {
    const {type, path, children} = props;
    return (
        <button className={style.Button}>
            <a>{children}</a>
        </button>
    )
}

export default Button;
