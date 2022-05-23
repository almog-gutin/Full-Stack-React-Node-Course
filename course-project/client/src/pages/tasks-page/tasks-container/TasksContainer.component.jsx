import React from 'react';
import './tasks-container.styles.css';

const TasksContainer = () => {
    return (
        <ul className="tasks-container">
            <div className="empty-list">Your list is empty</div>
        </ul>
    );
};

export default TasksContainer;
