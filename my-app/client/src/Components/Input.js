import React from 'react';

function Input(props){
    return (
    <div><label>{props.title}</label><input type="text" name="name" placeholder={props.placeholder} required/></div>
    )
}

export default Input;
