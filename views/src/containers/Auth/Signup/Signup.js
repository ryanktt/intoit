import React from 'react';
import {Link} from 'react-router-dom';
import style from './Signup.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';

const Signup = () => {
    return (
        <section className={style.Signup}>
            <h2>Registrar</h2>
            <Form>
                <Link to='/auth/login'>Já é registrado? Entre.</Link>
                <div className={style.Input}>
                    <Input 
                    label='Nome' 
                    placeholder='Digite seu nome.' 
                    name='name'/>
                </div>
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

export default Signup;