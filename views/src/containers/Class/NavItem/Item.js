import React from 'react';
import {Link} from 'react-router-dom';
import style from './Item.module.scss';

const Item = (props) => {
    const {children, active, path} = props;

    let activeItem = '';
    if(active) activeItem = style.Active
    const styles = [style.Item, activeItem].join(' ')

    return (
        <Link to={`#${path}`}><div className={styles}><h3>{children}</h3></div></Link>
    )
}

export default Item;
