import React from 'react';
import '../style/Button.css';

function Button(props) {
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };
    return (
        <div className={`container-button ${isOperator(props.children) ? 'operator' : ""}`.trimEnd()}>
            {props.children}
        </div>
    );

}

export default Button