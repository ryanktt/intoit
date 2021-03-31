import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import style from './AddClass.module.scss';
import Input from '../../../components/UI/Input/Input';
import Form from '../../../components/UI/Form/Form';
import Button from '../../../components/UI/Button/Button';
import {addClass} from '../../../redux/actions/user';
import { v4 as uuidv4 } from 'uuid';

const AddClass = (props) => {
    const {addClass, match, history} = props;
    const [formData, setFormData] = useState({
        title: '',
        video: '',
        description: '',
        links: []
    });
 
    const [linkArr, setLinkArr] = useState([]);
    const [linkInf, setLinkInf] = useState({
        title: '',
        url: ''
    })
    const courseId = match.params.id;
    
    const onSubmit = async(e) => {
        e.preventDefault();
        await addClass(formData, courseId);
        history.push(`/curso/${courseId}`);

    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
 
    }
   
    const onChangeLink = (e) => {
        setLinkInf({
            ...linkInf,
            [e.target.name]: e.target.value
        })
    }

    const onRemoveLink = (key) => {
        const linkData = linkArr.filter(el => el.key !== key);
        setLinkArr(linkData);
    }

    const onAddLink = () => {
        if(!linkInf.title || !linkInf.url) return;

        const key = uuidv4(0);
        const data = {...linkInf, key};
        setLinkArr([...linkArr, data]);
        setLinkInf({title: '', url: ''});

    }
    useEffect(() => {
        setFormData({
            ...formData,
            links: linkArr
        })
    }, [linkArr]);

    const linkJSX = linkArr.map(info => {
        return <div key={info.key} className={style.Link}>
                    <div className={[style.Input, style.Title].join(' ')}>
                            <p className={style.FilledInput}>{info.title}</p>
                    </div>
                    <div className={style.Input}>
                        <p className={style.FilledInput}>{info.url}</p>
                    </div>
                    
                    <div className={style.Btn}><Button button type='button' clicked={() => onRemoveLink(info.key)}><i className="fas fa-minus"></i></Button></div>
                </div>
    })


    return (
        <section className={style.AddClass}>
            <h2>Nova Aula</h2>
            <Form submited={(e) => onSubmit(e)}>
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
                
                <div style={{position: 'relative', width: 'max-content', margin: '20px auto 10px auto'}}>
                    <h4>Conteúdo</h4><small>Opcional</small>
                    </div>
                <div className={style.Input}>
                    <Input 
                    textarea
                    label='Informações Adicionais' 
                    placeholder='Digite aqui informações adicionais sobre a  aula.' 
                    name='description'
                    changed={onChange}
                    />
                </div>
       
                <label>Links</label>
                <div className={style.Link}>
                    <div className={[style.Input, style.Title].join(' ')}>
                            <Input  
                            placeholder='Título do link.' 
                            name='title'
                            changed={onChangeLink}
                            value={linkInf.title}
                            />
                    </div>
                    <div className={style.Input}>
                        <Input  
                            placeholder='Adicione URLs para conteúdo adicional externo.' 
                            name='url'
                            value={linkInf.url}
                            changed={onChangeLink}
                            />
                    </div>
                    
                    <div className={style.Btn}><Button button type='button' clicked={onAddLink}><i className="fas fa-plus"></i></Button></div>
                </div>
                {linkJSX}
                
                    
             
                <Button button type='submit'>Nova Aula</Button>
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

