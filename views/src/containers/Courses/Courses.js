import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import style from './Courses.module.scss';
import Course from '../../components/Course/Course';
import {getCourses} from '../../redux/actions/public';

const Courses = (props) => {
    const {getCourses, courses} = props;
    const [courseList, setCourseList] = useState([])

    useEffect(() => {
        if(!courses) {
            getCourses();
        } else {
            setCourseList(courses.map(course => {
                return <div className={style.Box}>
                    <Course data={course}/>
                    </div>
            }))
        }
        

    }, [courses]);

    return ( 
        <section>
            <h2>O Que Aprender</h2>
            <div className={style.Courses}>
               {courseList}
            
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        courses: state.public.courses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourses: () => dispatch(getCourses),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);

