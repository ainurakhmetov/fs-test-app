import React from 'react';

const Button = (props) => (

    <button className={props.styled}>
        {props.children}
    </button>

);

export default Button;
