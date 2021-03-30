import React from 'react';
import {Link} from 'react-router-dom';
import style from './Toolbar.module.scss';
import logo from '../../../assets/courses-logo.png';
import Button from '../../UI/Button/Button';


const Toolbar = (props) => {
    const {isAuthenticated, logout, history} = props;

    let btn = <div className={style.Btn}><Button path='/auth/login'>Login</Button></div>

    if(isAuthenticated) {
        btn = <div className={style.NavItems}>
                <Link to='/user/cursos'><h3>Meus Cursos</h3></Link>
                <h3 onClick={() =>{logout(); history.push('/')}}>Sair</h3>
            </div>
    }

    return (
        <div className={style.Toolbar}>
            <Link to='/'><img className={style.Logo} src={logo}/></Link>
            {btn}
        </div>
    )
}

export default Toolbar;
