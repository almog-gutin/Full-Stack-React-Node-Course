import React, { useContext } from 'react';
import './tasks-container.styles.css';

import { TasksContext } from '../../../contexts/Tasks.context';

const TasksContainer = () => {
    const tasksContextValue = useContext(TasksContext);

    return (
        <ul className="tasks-container">
            {tasksContextValue.tasksState.length === 0 ? (
                <div className="empty-list">Your list is empty</div>
            ) : (
                tasksContextValue.tasksState.map((task) => {
                    console.log(task);
                    return (
                        <div className="task-container">
                            <h3 className="task-title">{task.description}</h3>

                            <div className="btn-container">
                                <button className="update-btn">Update</button>

                                <button className="delete-btn">Delete</button>
                            </div>
                        </div>
                    );
                })
            )}
        </ul>
    );
};

export default TasksContainer;
