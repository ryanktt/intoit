import React from 'react';
import style from './Input.module.scss';

const Input = (props) => {
    const {label, placeholder, name, textarea, type, changed} = props;
    if (textarea) {
        return (
            <div className={style.Input}>
                <label for={name}>{label}</label>
                <textarea autoComplete='off' rows='5' onChange={(e) =>changed(e)} name={name} type='text' id={name} placeholder={placeholder}/>
            </div>
        )
    }

    if (type) {
        if (type === 'file') {
            return (
                <div className={style.Input}>
                    <label for={name}>{label}</label>
                    <input  autoComplete='off' name={name} onChange={(e) =>changed(e)} type='file' id={name} placeholder={placeholder}/>
                </div>
            )
        }

        return (
            <div className={style.Input}>
                <label for={name}>{label}</label>
                <input autoComplete='off' name={name} onChange={(e) =>changed(e)} type={type} id={name} placeholder={placeholder}/>
            </div>
        )
    }

    return (
        <div className={style.Input}>
            <label for={name}>{label}</label>
            <input autoComplete='off' name={name} onChange={(e) =>changed(e)} type='text' id={name} placeholder={placeholder}/>
        </div>
    )
}

export default Input;
