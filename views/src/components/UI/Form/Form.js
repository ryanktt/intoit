import React from 'react';
import style from './Form.module.scss';

const Form = (props) => {
    const {submited, children} = props
    return (
        <form  onSubmit={submited} className={style.Form}>
            {children}
        </form>
    )
}

export default Form;
