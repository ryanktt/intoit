import React from 'react';
import style from './Course.module.scss';

const Course = () => {
    return (
        <div className={style.Course}>
            <img src={'https://cpr.heart.org/-/media/cpr-images/find-a-course/aha-ian-3940-hires-find-a-course.jpg?h=761&la=en&mw=1140&w=1140&hash=A683D50F109A61B243608393ABFA667D51CE1392'}/>
            <h4>Título do curso</h4>
            <p>Nome do Instrutor</p>

        </div> 
    )
}

export default Course;
