import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import style from './Course.module.scss';
import Classes from './Classes/Classes';
import {getCourse} from '../../redux/actions/public';



const Course = (props) => {
    const {getCourse, course, match} = props;
    const courseId = match.params.id;

    useEffect(() => {
        getCourse(courseId);
        
    }, []);

    let noClasses = null;
    if (course) if (course.classes.length === 0) noClasses = (
        <h3 style={{margin: '20px auto'}}>Ainda não há aulas publicadas nesse curso</h3>
    )

    return (
        <section className={style.Course}>

            <h2>Aulas</h2>
            {course ? <Classes course={course}/> : null}
            {noClasses}
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

export default connect(mapStateToProps, mapDispatchToProps)(Course);

