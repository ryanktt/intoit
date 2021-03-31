import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import style from './Signup.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';
import {signup} from '../../../redux/actions/auth';
import Button from '../../../components/UI/Button/Button';

const Signup = (props) => {
    const {signup} = props;
    const [formData, setFormData] = useState({
        name: '',
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
        await signup(formData);
        props.history.push('/auth/login');
        
    }

    return (
        <section className={style.Signup}>
            <h2>Registrar</h2>
            <Form submited={(e) => onSubmit(e)}>
                <Link className={style.Link} to='/auth/login'>
                    Já é registrado? Entre.
                    </Link>
                <div className={style.Input}>
                    <Input 
                    label='Nome' 
                    placeholder='Digite seu nome de instrutor.' 
                    name='name'
                    changed={onChange}/>
                </div>
                <div className={style.Input}>
                    <Input
                    label='Email' 
                    placeholder='Digite seu email.' 
                    type='email'
                    name='email'
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

                <Button type='submit' button>Registrar</Button>
            </Form>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (formData) => dispatch(signup(formData)),
    }
}

export default connect(null, mapDispatchToProps)(Signup);
