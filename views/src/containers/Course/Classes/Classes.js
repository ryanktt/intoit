import React from 'react';
import style from './Classes.module.scss'

const Classes = () => {
    return (
        <div className={style.ClassList}>
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
    )
}

export default Classes;
