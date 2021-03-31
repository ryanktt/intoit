import React from 'react';
import {Link} from 'react-router-dom';
import style from './Classes.module.scss'

const Classes = (props) => {
    const {course, match} = props;

        const classes = course.classes.map((el, i) => {
            if(match) if(el._id === match.params.id) {
                return <Link key={i} className={[style.Class, style.Active]. join(' ')}to={`/aula/${el._id}#sobre`}>
                        <p>{i+ 1}.</p>
                        <h4>{el.title}</h4>
                    </Link>
            }

            return <Link key={i} className={style.Class}to={`/aula/${el._id}#sobre`}>
                        <p>{i+1}.</p>
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
