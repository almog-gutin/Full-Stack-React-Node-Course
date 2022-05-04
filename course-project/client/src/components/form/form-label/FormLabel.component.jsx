import React from 'react';
import './form-label.styles.css';

const FormLabel = (props) => {
    // let className = 'form-label';
    // if (props.className) {
    //     className = props.className;
    // }

    return (
        <label className={props.className ? props.className : 'form-label'} htmlFor={props.htmlFor}>
            {props.text}
        </label>
    );
};

export default FormLabel;
