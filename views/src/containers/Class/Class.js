import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import style from './Class.module.scss';
import PaginateBtn from '../../components/UI/PaginateBtn/PaginateBtn';
import About from './Sections/About';
import Content from './Sections/Content';
import Item from './NavItem/Item';
import Classes from '../Course/Classes/Classes';
import {getCourse, getClass} from '../../redux/actions/public';

const Class = (props) => {
    const {getCourse, getClass, classData, course, match} = props;
    const [section, setSection] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [pagination, setPagination] = useState({
        currentPage: null,
        previousPage: null,
        nextPage: null
    });
    const classId = match.params.id;


    const updatePagination = () => {
        const classIds = course.classes.map(data =>  data._id);
        const currentPageIndex = classIds.indexOf(classId);

        const currentPage = classIds[currentPageIndex];
        const nextPage = classIds[currentPageIndex + 1];
        const previousPage = classIds[currentPageIndex - 1];
        setPagination({currentPage, nextPage, previousPage});
    }

    useEffect(() => {
        if(classData && !course ) {
            getCourse(classData.course);
        }
        if (course) updatePagination();
       
    }, [classData]);

    useEffect(() => {
        itemList.map(item => {
            if (`#${item.value}` === window.location.hash) {
                setSection(item.section);
            }
        })
    }, [itemList])

    useEffect(() => {
        if(course) {
            updatePagination();
            
        }
    }, [course]);

    //pagination
    let previousClass = <div></div>;
    if(pagination.previousPage) previousClass = <PaginateBtn path={`/aula/${pagination.previousPage}#sobre`}>
            <i className="fas fa-chevron-left"></i>
        </PaginateBtn>;

    let nextClass = <div></div>;
    if(pagination.nextPage) nextClass = <PaginateBtn path={`/aula/${pagination.nextPage}#sobre`}>
        <i className="fas fa-chevron-right"></i>
        </PaginateBtn>;


    
    //updates class when page changes
    useEffect(() => {
        getClass(classId);  
    }, [match.params.id]);

    
   
    useEffect(() => {
        if(classData) if(course) setItemList([
            {name:'Sobre', value:'sobre', section: <About description={course.description}/>},
            {name:'Conteúdo', value:'conteudo', section: classData ? <Content content={classData.content}/> : null},
            {name: 'Aulas', value: 'aulas', section: <div className={style.ClassList}>{ course ? <Classes {...props} course={course}/> : null }</div>}
        ]);

        itemList.map(item => {
            if (`#${item.value}` === window.location.hash) {
                setSection(item.section);
            }
        })
    }, [classData, course]);



    useEffect(() => {
        itemList.map(item => {
            if (`#${item.value}` === window.location.hash) {
                setSection(item.section);
            }
        })
    }, [window.location.hash]);

    //set which item has active style by hash location

    const items  = itemList.map(item => {

        const active = `#${item.value}` === window.location.hash;
        console.log(window.location.hash, ' ', '#' + item.value)
        if(item.value === 'aulas') {
            return <div key={item.value} className={style.ClassesItem}>
                <Item  path={item.value} active={active}>{item.name}</Item>
            </div>
        }
        return <Item  key={item.value} path={item.value} active={active}>{item.name}</Item>
    });

    return (
        
        (course && classData) ? <section className={style.Class}>
            
            <div className={style.Main}>
                <div className={style.Video}>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src={classData.video}
                    frameBorder="0"/>
                </div>

                <h3>{classData.title}</h3>

                <div className={style.Navigation}>
                    {previousClass}
                    <div className={style.Items}>
                        {items}
                    </div>
                    {nextClass}
                </div>

                <div  className={style.Sections}>
                    {section}
                </div>
            </div>

            <div className={style.Side}>
                <Classes {...props} course={course}/>
            </div>
            
        </section> : null
    )
}

const mapStateToProps = state => {
    return {
        course: state.public.course,
        classData: state.public.class
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourse: (courseId) => dispatch(getCourse(courseId)),
        getClass: (classId) => dispatch(getClass(classId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Class);