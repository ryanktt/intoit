import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import style from './Class.module.scss';
import PaginateBtn from '../../components/UI/PaginateBtn/PaginateBtn';
import About from './Sections/About';
import Attachments from './Sections/Attachments';
import Item from './NavItem/Item';
import Classes from './Sections/Classes';
import {getCourse} from '../../redux/actions/public';

const Class = () => {
    const [section, setSection] = useState(<About/>);
    const [itemList, setItemList] = useState([
        {name:'Sobre', value:'sobre', section: <About/>},
        {name:'Anexos', value:'anexos', section: <Attachments/>},
        {name: 'Aulas', value: 'aulas', section: <div className={style.ClassList}><Classes/></div>}

    ])


    useEffect(() => {
        itemList.map(item => {
            if (`#${item.value}` === window.location.hash) {
                setSection(item.section)
            }
        })
    }, [window.location.hash])

    const items  = itemList.map(item => {
        const active = `#${item.value}` === window.location.hash;
        if(item.value === 'aulas') {
            return <div key={item.value} className={style.ClassesItem}>
                <Item  path={item.value} active={active}>{item.name}</Item>
            </div>
        }
        return <Item  key={item.value} path={item.value} active={active}>{item.name}</Item>
    });


    return (
        <section className={style.Class}>
            <div className={style.Main}>
                <div className={style.Video}>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                    frameborder="0"/>
                </div>
                <div className={style.Navigation}>
                    <PaginateBtn><i className="fas fa-chevron-left"></i></PaginateBtn>
                    <div className={style.Items}>
                        {items}
                    </div>
                    <PaginateBtn><i className="fas fa-chevron-right"></i></PaginateBtn>
                </div>
                <div  className={style.Sections}>
                    {section}
                </div>
            </div>

            <div className={style.Side}>
                <Classes/>
            </div>
            
            
            
        </section>
    )
}

const mapStateToProps = state => {
    return {
        course: state.public.course
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourse: (courseId) => dispatch(getCourse(courseId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Class);