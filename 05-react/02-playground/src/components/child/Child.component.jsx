import React from 'react';
import './child.styles.css';

const Child = (props) => {
    console.log(props);

    return (
        <div className="child">
            <h3>{`${props.firstName} ${props.lastName}`}</h3>

            <p>{props.age}</p>
        </div>
    );
};

export default Child;
