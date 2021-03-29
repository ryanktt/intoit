import React from 'react';
import {Link} from 'react-router-dom';
import style from './Toolbar.module.scss';
import logo from '../../../assets/courses-logo.png';
import Button from '../../UI/Button/Button';


const Toolbar = (props) => {
    const {isAuthenticated, logout} = props;

    let btn = <div className={style.Btn}><Button path='/auth/login'>Login</Button></div>

    if(isAuthenticated) {
        btn = <div className={style.Btn}><Button button type='button' clicked={logout}>Logout</Button></div>
    }

    return (
        <div className={style.Toolbar}>
            <Link to='/'><img className={style.Logo} src={logo}/></Link>
            {btn}
        </div>
    )
}

export default Toolbar;
