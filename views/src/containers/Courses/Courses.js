import React from 'react';
import style from './Courses.module.scss';
import Course from '../../components/Course/Course';

const Courses = () => {
    return ( 
        <section>
            <h2>O Que Aprender</h2>
            <div className={style.Courses}>
                <div className={style.Box}><Course/></div>
                <div className={style.Box}><Course/></div>
                <div className={style.Box}><Course/></div>
                <div className={style.Box}><Course/></div>
                <div className={style.Box}><Course/></div>
                <div className={style.Box}><Course/></div>
            
            </div>
        </section>
    )
}

export default Courses;
