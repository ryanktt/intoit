import React from 'react';
import {Link} from 'react-router-dom';
import style from './Classes.module.scss'

const Classes = (props) => {
    const {course} = props;
        console.log(course)
        const classes = course.classes.map((el, i) => {
 
                return <Link key={i} className={style.Class}to={`/aula/${el._id}`}>
                            <p>{i++}.</p>
                            <h4>{el.title}</h4>
                        </Link>
        })



    return (
        <div className={style.ClassList}>
            <div className={[style.Class, style.Title].join(' ')}>
               <h3>{course.title}</h3>
            </div>
            {classes}

            
            
        </div>
    )
}

export default Classes;
