import React from 'react';

function Button(props){
    return (
        <div><button type={props.type} className="btn btn-outline-success">{props.button}</button></div>
    )
}

export default Button;
