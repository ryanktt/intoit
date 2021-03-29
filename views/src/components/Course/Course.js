import React from 'react';
import {Link} from 'react-router-dom';
import style from './Course.module.scss';

const Course = (props) => {
    const {data} = props;
    const {title, image, user, _id} = data;
    return (
        <div className={style.Course}>
            <Link to={`/curso/${_id}`}><img src={image}/></Link>
            <Link to={`/curso/${_id}`}><h4>{title}</h4></Link>
            <p>{user.name}</p>

        </div> 
    )
}

export default Course;
