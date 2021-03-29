import React, {useState} from 'react';
import {connect} from 'react-redux';
import style from './AddClass.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';
import Button from '../../../components/UI/Button/Button';
import {addClass} from '../../../redux/actions/user';

const AddClass = (props) => {
    const {addClass, match, history} = props;
    const [formData, setFormData] = useState({
        title: '',
        video: ''
    });
    const courseId = match.params.id
    
    const onSubmit = (e) => {
        e.preventDefault();
        addClass(formData, courseId);
        history.push(`/curso/${courseId}`);
    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData)
    }

    return (
        <section className={style.AddClass}>
            <h2>Nova Aula</h2>
            <Form submited={(e) =>onSubmit(e)}>
                <div className={style.Input}>
                    <Input 
                    label='Título' 
                    placeholder='Digite o um título para a aula.' 
                    name='title'
                    changed={onChange}
                    />
                </div>
                <div className={style.Input}>
                    <Input 
                    label='Vídeo' 
                    placeholder='Digite a URL da vídeo aula. (Youtube)' 
                    name='video'
                    changed={onChange}
                    />
                </div>
                
                <Button button type='submit'>Novo Curso</Button>
            </Form>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addClass: (formData, courseId) => dispatch(addClass(formData, courseId))
    }
}

export default connect(null, mapDispatchToProps)(AddClass);

