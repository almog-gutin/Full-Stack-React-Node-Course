import React from 'react';

const CustomButton = (props) => {
    console.log(props);

    return (
        <button type={props.type} className={props.className} onClick={props.handleClick}>
            {props.text}
        </button>
    );
};

export default CustomButton;
