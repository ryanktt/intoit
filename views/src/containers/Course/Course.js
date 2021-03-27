import React from 'react';
import style from './Course.module.scss';
import Classes from './Classes/Classes';

const Course = () => {
    return (
        <section className={style.Course}>

            <h2>Aulas</h2>
            <Classes/>
        </section>
    )
}

export default Course;

