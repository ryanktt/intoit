import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import style from './Login.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';
import {login} from '../../../redux/actions/auth';
import Button from '../../../components/UI/Button/Button';

const Login = (props) => {
    const {login, history} = props;
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await login(formData);  
        history.push('/');
    }

    return (
        <section className={style.Login}>
            
            <h2>Login</h2>
            <Form submited={(e) => onSubmit(e)}>
                <Link to='/auth/registro'>Não é membro? registre-se.</Link>
                <div className={style.Input}>
                    <Input
                    label='Email' 
                    placeholder='Digite seu email.' 
                    name='email'
                    type='email'
                    changed={onChange}/>
                    
                </div>
                <div className={style.Input}>
                    <Input
                    label='Senha' 
                    type='password'
                    placeholder='Digite sua senha.' 
                    name='password'
                    changed={onChange}/>
                    
                </div>

                <Button type='submit' button>Entrar</Button>
            </Form>
        </section>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        login: (formData) => dispatch(login(formData)),
    }
}

export default connect(null, mapDispatchToProps)(Login);
