import React from 'react';
import { Link } from 'react-router-dom';
import style from './PaginateBtn.module.scss';

const PaginateBtn = (props) => {
    const {path, children} = props;
    return (
        <Link to={path} type='button' className={style.PaginateBtn}>
            <a>{children}</a>
        </Link>
    )
}

export default PaginateBtn;
