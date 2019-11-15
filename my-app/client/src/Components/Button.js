import React from 'react';

function Button(props){
    return (
        <div><button type="button" className="btn btn-outline-success">{props.button}</button></div>
    )
}

export default Button;
