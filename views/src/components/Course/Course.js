import React from 'react';
import {Link} from 'react-router-dom';
import style from './Course.module.scss';
import Button from '../UI/Button/Button';

const Course = (props) => {
    const {data, admin} = props;
    const {title, image, user, _id} = data;
    return (
        <div className={style.Course}>
            <Link to={`/curso/${_id}`}><img alt='' src={image}/></Link>
            <Link to={`/curso/${_id}`}><h4>{title}</h4></Link>
            <p>{user.name}</p>
            {admin ? <div className={style.Btn}>
             <Button path={`/user/nova-aula/${_id}`} >Adicionar Aula</Button>
            </div> : null}
        </div> 
    )
}

export default Course;
