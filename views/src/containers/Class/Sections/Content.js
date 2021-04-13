import React from 'react';


const Content = (props) => {
    const {content} = props;
    let linksJSX = null;
    let descriptionJSX = null;

    if (content){
        if (content.links) descriptionJSX = <>
                    <h5>Informações Adicionais</h5>
                    <p style={{marginBottom: '15px'}}>{content.description}</p>
                    </> 

        if(content.links.length> 0) {

            linksJSX = <>
                    <h5>Links</h5>
                    {content.links.map(link => {
                        return<a key={link.key} target="_blank" rel="noreferrer" href={link.url}>{link.title}</a>
                    })}
            </>
        }
    }

    return (
        
            content ? <>
            <h4>Conteúdo</h4>
            {descriptionJSX}
            {linksJSX}</> : 
            <h4>Essa aula não possui informações adicionais</h4>
            
    
    )
}

export default Content;
