import React from 'react';
import style from './Input.module.scss';

const Input = (props) => {
    const {label, placeholder, name, textarea, type, changed, value} = props;

    let labelDiv = <div className={style.Label}><label for={name}>{label}</label></div>;

    if(!label) labelDiv = null;
    if (textarea) {
        return (
            <div className={style.Input}>
                {labelDiv}
                <textarea value={value} autoComplete='off' rows='5' onChange={(e) =>changed(e)} name={name} type='text' id={name} placeholder={placeholder}/>
            </div>
        )
    }

    if (type) {

        return (
            <div className={style.Input}>
                {labelDiv}
                <input value={value} autoComplete='off' name={name} onChange={(e) =>changed(e)} type={type} id={name} placeholder={placeholder}/>
            </div>
        )
    }

    return (
        <div className={style.Input}>
            {labelDiv}
            <input value={value} autoComplete='off' name={name} onChange={(e) =>changed(e)} type='text' id={name} placeholder={placeholder}/>
        </div>
    )
}

export default Input;
