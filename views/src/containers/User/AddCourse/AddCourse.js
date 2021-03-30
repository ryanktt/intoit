import React, {useState} from 'react';
import {connect} from 'react-redux';
import style from './AddCourse.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';
import Button from '../../../components/UI/Button/Button';
import {addCourse} from '../../../redux/actions/user';

const AddCourse = (props) => {
    const {addCourse, match, history} = props;
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: ''
    });
    const userId = match.params.id
    
    const onSubmit = async (e) => {
        e.preventDefault();
        await addCourse(formData, userId);

        history.push('/user/cursos');
    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className={style.AddCourse}>
            <h2>Novo Curso</h2>
            <Form submited={(e) =>onSubmit(e)}>
                <div className={style.Input}>
                    <Input 
                    label='Título' 
                    placeholder='Digite o título do curso.' 
                    name='title'
                    changed={onChange}
                    />
                </div>
                <div className={style.Input}>
                    <Input
                    textarea
                    label='Sobre' 
                    placeholder='Digite uma breve descrição sobre o curso.' 
                    name='description'
                    changed={onChange}
                    />
                </div>
                <div className={style.Input}>
                    <Input 
                    label='Imagem' 
                    placeholder='Url da imagem.' 
                    name='image'
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
        addCourse: (formData) => dispatch(addCourse(formData)),
    }
}

export default connect(null, mapDispatchToProps)(AddCourse);
