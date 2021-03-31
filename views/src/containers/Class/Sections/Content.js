import React from 'react';


const Content = (props) => {
    let linksJSX = null;
    let descriptionJSX = null;

    if (props.content){
        if (props.content.links) descriptionJSX = <>
                    <h5>Informações Adicionais</h5>
                    <p style={{marginBottom: '15px'}}>{props.content.description}</p>
                    </> 

        if(props.content.links.length> 0) {

            linksJSX = <>
                    <h5>Links</h5>
                    {props.content.links.map(link => {
                        return<a key={link.key} target="_blank" href={link.url}>{link.title}</a>
                    })}
            </>
        }
    }

    return (
        
            props.content ? <>
            <h4>Conteúdo</h4>
            {descriptionJSX}
            {linksJSX}</> : 
            <h4>Essa aula não possui informações adicionais</h4>
            
    
    )
}

export default Content;
