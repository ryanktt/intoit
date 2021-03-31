import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import style from './Courses.module.scss';
import Course from '../../../components/Course/Course';
import {getCourses} from '../../../redux/actions/user';
import { Link } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';

const Courses = (props) => {
    const {getCourses, courses, isAuth} = props;
    const [courseList, setCourseList] = useState([]);
    

    useEffect(() => {
        if(isAuth)  {
            getCourses();
        }
    }, []);

    useEffect(() => {
        if(isAuth) if(!courses) {
            getCourses();
        }
    }, [isAuth]);
    

    useEffect(() => {
        if(courses) {
       
            setCourseList(courses.map(course => {
                return <div key={course._id} className={style.Box}>
                    <Course {...props} admin={true} data={course}/>
                    </div>
            }))
        }
    }, [courses])

    return ( 
        <section>
            <div style={{margin: '0 auto 40px auto', width: 'max-content'}}>
                <Button path='/user/novo-curso'>Novo Curso</Button>
            </div>
            <div className={style.Courses}>
               {courseList}
                { courseList.length === 0 ?
                    <h3 style={{margin: '0 auto'}}>
                        Você ainda não tem cursos, <Link to='/user/novo-curso'>criar?</Link>
                    </h3>
                : null}
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        courses: state.user.courses,
        isAuth: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourses: () => dispatch(getCourses),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);

