import React from 'react';

function Input(props){
    return (
    <div><label>{props.title}</label><input type={props.type} className={props.className} name={props.name} placeholder={props.placeholder} required/></div>
    )
}

export default Input;
