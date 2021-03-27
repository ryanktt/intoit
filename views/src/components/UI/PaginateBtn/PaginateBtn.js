import React from 'react';
import style from './PaginateBtn.module.scss';

const PaginateBtn = (props) => {
    return (
        <button className={style.PaginateBtn}>
            <a>{props.children}</a>
        </button>
    )
}

export default PaginateBtn;
