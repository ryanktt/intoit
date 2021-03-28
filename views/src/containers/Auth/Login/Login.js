import React from 'react';
import {Link} from 'react-router-dom';
import style from './Login.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';

const Login = () => {
    return (
        <section className={style.Login}>
            
            <h2>Login</h2>
            <Form>
                <Link to='/auth/signup'>Não é membro? registre-se.</Link>
                <div className={style.Input}>
                    <Input
                    label='Email' 
                    placeholder='Digite seu email.' 
                    name='email'/>
                    
                </div>
                <div className={style.Input}>
                    <Input
                    label='Senha' 
                    type='password'
                    placeholder='Digite sua senha.' 
                    name='password'/>
                    
                </div>
            </Form>
        </section>
    )
}

export default Login;
