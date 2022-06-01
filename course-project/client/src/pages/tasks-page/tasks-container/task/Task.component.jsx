import React from 'react';
import './task.styles.css';

const Task = (props) => {
    return (
        <div className="task-container">
            <h3 className="task-title">{props.description}</h3>

            <div className="btn-container">
                <button className="update-btn">Update</button>

                <button className="delete-btn">Delete</button>
            </div>
        </div>
    );
};

export default Task;
