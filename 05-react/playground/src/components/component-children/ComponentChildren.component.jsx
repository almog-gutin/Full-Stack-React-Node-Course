import React from 'react';
import './component-children.styles.css';

const ComponentChildren = (props) => {
    // props.children
    console.log(props.children);

    return <div className={props.className}>{props.children}</div>;
};

export default ComponentChildren;
