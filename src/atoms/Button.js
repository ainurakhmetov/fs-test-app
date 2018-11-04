import React from 'react';

const Button = ({children}) => {

    const style = {
        textDecoration: 'none',
        color: '#000'
    }

    return(
        <button>
            <a style={style} href="#">{children}</a>
        </button>
    );
};

export default Button;