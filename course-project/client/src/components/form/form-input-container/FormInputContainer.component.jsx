import React from 'react';
import './form-input-container.styles.css';

import FormLabel from '../form-label/FormLabel.component';
import FormInputText from '../form-input-text/FormInputText.component';

const FormInputContainer = (props) => {
    return (
        <div className="form-input-container">
            <FormLabel htmlFor={props.id} text={props.labelText} />

            <FormInputText id={props.id} required={props.required} type={props.type} />
        </div>
    );
};

export default FormInputContainer;
