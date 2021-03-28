import React from 'react';
import style from './AddCourse.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';

const AddCourse = () => {
    return (
        <section className={style.AddCourse}>
            <h2>Novo Curso</h2>
            <Form>
                <div className={style.Input}>
                    <Input 
                    label='Título' 
                    placeholder='Digite o título do curso.' 
                    name='title'/>
                </div>
                <div className={style.Input}>
                    <Input
                    textarea
                    label='Sobre' 
                    placeholder='Digite uma breve descrição sobre o curso.' 
                    name='description'/>
                </div>
            </Form>
        </section>
    )
}

export default AddCourse;
