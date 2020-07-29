import React  from 'react';

function ButtonLink(props){
    //props => { ClassName: "Oque for passado", href : "/" }
    return (
        <a href={props.href} className={props.className}>
           Novo Vídeo
        </a>
    );
}

export default ButtonLink;
