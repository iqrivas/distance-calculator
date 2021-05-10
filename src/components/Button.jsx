import React from 'react';
import '../sass/components/_Button.scss'

function Button ({type, text, onClick}) {

    return (
        <button id={`btn_${type}`} className="btn" onClick={onClick} >{text}</button>
    );
}

export default Button;