import React from 'react'



const About = (props) => {
    const {description} = props;

    return (
        <>
            <h4>Sobre o Curso</h4>
            <p>
            {description}
            </p>
        </>
    )
}

export default About;
