import React from 'react';
import style from './PaginateBtn.module.scss';

const PaginateBtn = (props) => {
    const {path, children} = props;
    return (
        <button type='button' className={style.PaginateBtn}>
            <a>{children}</a>
        </button>
    )
}

export default PaginateBtn;
