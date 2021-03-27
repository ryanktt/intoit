import React from 'react';
import style from './Course.module.scss';

const Course = () => {
    return (
        <section style={{padding: '0 15px'}}>

            <h2>Aulas</h2>
            <div className={style.Course}>
                <div className={[style.Class, style.Title].join(' ')}>
                    <h3>Nome do Curso</h3>
                </div>
                <div className={style.Class}>
                    <p>1.</p><h4> O nome da aula aqui</h4>
                </div>
                <div className={style.Class}>
                    <p>1.</p><h4> O nome da aula aqui</h4>
                </div>
                <div className={style.Class}>
                    <p>1.</p><h4> O nome da aula aqui</h4>
                </div>
                <div className={style.Class}>
                    <p>1.</p><h4> O nome da aula aqui</h4>
                </div>
            </div>
        </section>
    )
}

export default Course;

