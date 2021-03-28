import React from 'react';
import style from './AddClass.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';

const AddClass = () => {
    return (
        <section className={style.AddClass}>
            <h2>Nova Aula</h2>
            <Form>
                <div className={style.Input}>
                    <Input 
                    label='Título' 
                    placeholder='Digite o título do Aula.' 
                    name='title'/>
                </div>
                <div className={style.Input}>
                    <Input
                    label='Sobre' 
                    placeholder='Digite uma breve descrição sobre o curso.' 
                    name='description'/>
                    
                </div>
            </Form>
        </section>
    )
}

export default AddClass;
