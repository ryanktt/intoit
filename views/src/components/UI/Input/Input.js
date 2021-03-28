import React from 'react';
import style from './Input.module.scss';

const Input = (props) => {
    const {label, placeholder, name, textarea, type} = props;
    if (textarea) {
        return (
            <div className={style.Input}>
                <label for={name}>{label}</label>
                <textarea autoComplete='off' rows='5' name={name} type='text' id={name} placeholder={placeholder}/>
            </div>
        )
    }
    if (type) {
        return (
            <div className={style.Input}>
                <label for={name}>{label}</label>
                <input autoComplete='off' name={name} type={type} id={name} placeholder={placeholder}/>
            </div>
        )
    }

    return (
        <div className={style.Input}>
            <label for={name}>{label}</label>
            <input autoComplete='off' name={name} type='text' id={name} placeholder={placeholder}/>
        </div>
    )
}

export default Input;
